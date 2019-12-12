const fileSystem = require('fs');

const controller = {
    writeStand: (req, res) => {
        const { name, lat, lng } = req.body;

        if(!name || !lat || !lng) return res.status(400).json({ error: "Body fields are invalid, please try again." });

        const taxiStandName = name.split(' ').join('-').toUpperCase();

        const currentDate = new Date();
        const dateISOString = currentDate.toISOString().slice(0, -1);

        const taxiStandString = `${taxiStandName}#${lat}#${lng}#${dateISOString}\n`;

        let fileToWrite;

        try {
            fileToWrite = fileSystem.openSync('./src/public/taxi-stands/taxi-stands.txt', 'a+');
            fileSystem.appendFileSync(fileToWrite, taxiStandString, 'utf8');

            return res.json({ writing_line: taxiStandString.slice(0, -1) });
        } catch (err) {
            return res.status(400).json({ error: "An error has ocurrend, please try again." });
        } finally {
            if(fileToWrite !== undefined) fileSystem.closeSync(fileToWrite);
        }
    },

    readStand: async (req, res) => {
        const { search } = req.query;

        let fileToRead;

        try {
            fileToRead = fileSystem.openSync('./src/public/taxi-stands/taxi-stands.txt', 'r');

            const fileData = fileSystem.readFileSync(fileToRead);

            const fileDataString = fileData.toString();

            let fileDataArray = fileDataString.split('\n').slice(0, -1);

            if(search)
                fileDataArray = fileDataArray.filter(string => string.indexOf(search.trim().toUpperCase()) > -1);

            return res.json({ data: fileDataArray });
        } catch (err) {
            return res.status(400).json({ error: "An error has ocurred, please try again." });
        } finally {
            if(fileToRead !== undefined) fileSystem.closeSync(fileToRead);
        }
    },

    renderStand: (req, res) => {
        let fileToRead;

        try {
            fileToRead = fileSystem.openSync('./src/public/taxi-stands/taxi-stands.txt', 'r');

            const fileData = fileSystem.readFileSync(fileToRead);

            const fileDataString = fileData.toString();

            const fileDataToRender = fileDataString.split('\n').join('<br>');

            return res.send(fileDataToRender);
        } catch (err) {
            return res.status(400).json({ error: "An error has ocurred, please try again." });
        } finally {
            if(fileToRead !== undefined) fileSystem.closeSync(fileToRead);
        }
    }
}

module.exports = controller;