const express = require('express');
const router  = express.Router();
// Call Contrller for use in route
const thaiController = require('../controllers/thai_addr')

// User Login (Authenticate)
router.get('/',thaiController.thai_addr);

module.exports = router;