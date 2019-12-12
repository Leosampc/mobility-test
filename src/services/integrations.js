const { dataPoaApi, poaTransporteApi } = require('../services/api');

const integrations = {
    datapoa: (req, res) => {
        const { search, limit } = req.query;

        dataPoaApi.get('datastore_search?resource_id=c8cf58cf-649c-49b1-af78-d0e0beeb6332', {
                params: {
                    q: search ? search.trim() : null,
                    limit: limit || null
                }
            })
            .then(({ data }) => {
                const { result: { records } } = data;
                console.log(records);
                res.json(records) || {};
            })
            .catch(err => res.status(400).json({ error: "An error ocurred on datapoa request, please try again." }));
    },

    poatransporte: async (req, res) => {
        const { action, type, param, busline } = req.query;

        try {
            let { data: lines } = await poaTransporteApi.get('process.php', {
                params: {
                    a: action || null,
                    p: param || null,
                    t: type || null
                }
            });

            if(busline) {
                const busline_search = busline.trim().toUpperCase();
                lines = lines.filter(line => line.nome.indexOf(busline_search) > -1);
            }

            return res.json(lines);
        } catch (err) {
            res.status(400).json({ error: "An error ocurred on datapoa request, please try again." });
        }
    }
}

module.exports = integrations;