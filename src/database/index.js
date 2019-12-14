const mongoose = require('mongoose');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.mongoConnection = mongoose.connect(
            'mongodb://localhost:27017/mobility-test', 
            {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true
            }
        );
    }
};

module.exports = new Database();