const express = require('express');
const router  = express.Router();
const isAuth = require('../middleware/isAuth')
const quarantine_placeController = require('../contollers/quarantine_place')


router.get('/get-quarantine-place',quarantine_placeController.quarantine_place_list);

module.exports = router;