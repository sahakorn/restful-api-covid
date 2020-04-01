const express = require('express');
const router  = express.Router();
// Call Contrller for use in route
const userController = require('../controllers/users')
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Get'
    })
});
// User Login (Authenticate)
router.post('/login',userController.user_auth);

module.exports = router;