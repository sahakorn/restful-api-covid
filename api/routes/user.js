const express = require('express');
const router  = express.Router();
const userController = require('../contollers/user')

router.get('/get-station',userController.all_station);

// router.post('/update-checkpoint',checkPointController.update_checkpoint);
module.exports = router;