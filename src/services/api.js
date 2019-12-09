const axios = require('axios');

const api = axios.create({
    baseURL: 'http://www.poatransporte.com.br/php/facades/',
    timeout: 2000,
});

module.exports = api;