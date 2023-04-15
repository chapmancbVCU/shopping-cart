const vexpress = require("express");
const vehicleRouter = vexpress.Router();
const Vehicle = require("../models/VehicleModel");


vehicleRouter.route("/vehicles").get((req: any, res: any) => {
    Vehicle.find()
        .then((foundVehicles: any) => res.json(foundVehicles));
})


module.exports = vehicleRouter;