const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect(
    "mongodb://127.0.0.1:27017/travelExplorer",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
const Booking =
require("./models/Booking");

app.post("/booking", async (req, res) => {

    try {

        const booking =
        new Booking(req.body);

        await booking.save();

        res.send("Booking Saved");

    } catch (error) {

        res.send(error);
    }
});