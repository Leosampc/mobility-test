const mongoose = require('mongoose');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:27017/mobility-test', 
            {
                useNewUrlParser: true,
                useFindAndModify: true,
            }
        );
    }
};

module.exports = new Database();