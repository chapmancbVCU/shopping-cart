const vmongoose = require("mongoose");
const vehicleSchema = {
    name: String,
    vehicleType: String
}

const vehicles = vmongoose.model("Vehicle", vehicleSchema);
module.exports = vehicles;