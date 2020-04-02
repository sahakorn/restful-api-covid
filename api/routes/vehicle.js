const express = require('express');
const router  = express.Router();
const isAuth = require('../middleware/isAuth')
const vehicleController = require('../contollers/vehicle')


router.get('/get-vehicle',vehicleController.vehicle_list);

module.exports = router;