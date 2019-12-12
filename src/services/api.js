const axios = require('axios');

const dataPoaApi = axios.create({
    baseURL: 'https://dadosabertos.poa.br/api/3/action/',
    timeout: 5000,
})

const poaTransporteApi = axios.create({
    baseURL: 'http://www.poatransporte.com.br/php/facades/',
    timeout: 5000,
});

module.exports = {
    dataPoaApi,
    poaTransporteApi
};