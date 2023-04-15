const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// Connect to mongoose
mongoose.connect("mongodb+srv://chadchapman2010:XAXBXFPc3TdYSqpa@cluster1.yde2tii.mongodb.net/shopping-cart");

//require route
app.use("/", require("./routes/VehicleRoute"));

app.listen(3001, function() {
    console.log("Express server is running on port 3001");
})