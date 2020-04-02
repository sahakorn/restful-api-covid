const express = require('express');
const router  = express.Router();
const isAuth = require('../middleware/isAuth')
const immigrationController = require('../contollers/immigration')
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Get'
    })
});
router.post('/create-immigration',immigrationController.create_immigration);
router.get('/get-immigration',immigrationController.find_immigration);
module.exports = router;