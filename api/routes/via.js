const express = require('express');
const router  = express.Router();
const incomeController = require('../contollers/via')
router.get('/all-via',incomeController.all_income);

module.exports = router;