const mongoose = require("mongoose");

const Word = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const wordModel = new mongoose.model("Word", Word);

module.exports = wordModel;
