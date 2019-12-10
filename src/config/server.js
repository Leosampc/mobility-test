const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://mobility-user:cbut23g8k4@cluster0-5hdjy.mongodb.net/mobility-test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

module.exports = server;