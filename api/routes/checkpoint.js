const express = require('express');
const router  = express.Router();
const isAuth = require('../middleware/isAuth')
const checkPointController = require('../contollers/checkpoint')
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Get'
    })
});
router.post('/create-checkpoint',checkPointController.create_checkpoint);
router.get('/get-checkpoint',checkPointController.find_checkpoint);
router.post('/delete-checkpoint',checkPointController.delete_checkpoint);
router.post('/update-checkpoint',checkPointController.update_checkpoint);
module.exports = router;