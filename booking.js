const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    name: String,

    email: String,

    phone: String,

    destination: String,

    travelers: Number,

    travelDate: String
});

module.exports =
mongoose.model("Booking", bookingSchema);