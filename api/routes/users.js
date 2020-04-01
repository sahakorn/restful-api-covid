const express = require('express');
const router  = express.Router();
const isAuth = require('../middleware/isAuth')
const userController = require('../contollers/users')
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Get'
    })
});
router.post('/create-user',userController.create_users);
router.get('/get-users',userController.find_users);
router.post('/delete-user',userController.delete_user);
router.post('/login',userController.login_user);
// router.post('/update-checkpoint',checkPointController.update_checkpoint);
module.exports = router;