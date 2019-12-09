const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const routes = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

module.exports = server;