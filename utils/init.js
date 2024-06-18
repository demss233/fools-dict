require("dotenv").config();
const mongoose = require("mongoose");
const wordModel = require("../models/word");

const connectionParameters = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

const mongoUri = process.env.mongouri;

const connect = async () => {
    try {
        await mongoose.connect(mongoUri);
        // for debugging purposes add a console log here.
    } catch (error) {
        console.error(error);
    }
};

module.exports = connect;
