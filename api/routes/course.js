const express = require('express');
const router  = express.Router();
const isAuth = require('../middleware/isAuth')
const courseController = require('../contollers/course')
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Get'
    })
});
router.post('/course_view',isAuth,courseController.course_view);
module.exports = router;