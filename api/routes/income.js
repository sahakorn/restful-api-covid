const express = require('express');
const router  = express.Router();
const incomeController = require('../contollers/income')
router.get('/all-income',incomeController.all_income);

module.exports = router;