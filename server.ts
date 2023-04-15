const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const serverUrl = require("./ServerURL");
app.use(cors());
app.use(express.json());

// Connect to mongoose


mongoose.connect(serverUrl);

//require route
app.use("/", require("./routes/VehicleRoute"));

app.listen(3001, function() {
    console.log("Express server is running on port 3001");
})