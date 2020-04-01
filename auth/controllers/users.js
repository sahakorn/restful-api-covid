const User = require('../models/users')
const jwt = require('jsonwebtoken');
exports.user_auth = (req,res,next)=>{
    try{
        // Find User data from Database 
        User.findAll(
            { where:{email:req.body.email}
        })
        .then(users => {
            if(users.length < 1){
                // if not found user.
                return res.status(404).json({
                    message:'Email Not Found'
                })
            }else{
                // Create a token for user request
                const token = jwt.sign(
                    {
                        user_id:users[0].user_id,
                        email:users[0].email,
                        phone:users[0].phone,
                        prename:users[0].prename,
                        firstname:users[0].firstname,
                        lastname:users[0].lastname
                    },
                        process.env.SERVER_KEY,
                    {
                        expiresIn:"1h"
                    })
                res.status(200).json({
                    token:token
                }) 
            }
        })
        .catch(err => {
            // if error something
            res.status(404).json({
                message:err.message
            })
        })

    } catch(err){
        // in case can't load module
        res.status(404).json({
            message:err.message
        })
    }
}