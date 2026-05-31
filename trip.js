const mongoose = require("mongoose");

const tripSchema =
new mongoose.Schema({

    destination: String,

    days: Number,

    travelers: Number
});

module.exports =
mongoose.model("Trip", tripSchema);