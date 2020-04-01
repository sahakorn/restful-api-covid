const Users = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.create_users = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if(err){
            return res.status(500).json({
                error:err.message
            })
        }else{
                // Store hash in database
                const user = {
                    username:req.body.username,
                    password:hash,
                    prename:req.body.prename,
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    position:req.body.position,
                    email:req.body.email,
                    phone:req.body.phone,
                    checkpoint_id:req.body.checkpoint_id
                }
                Users.create(user).then(data =>{
                    return res.status(200).json({
                        message:'User created!',
                        user_data:data
                    })
                }).catch(err => {
                    return res.status(500).json({
                        message:err.message
                    })
                });
        }
        
      });
  
}
exports.find_users = (req,res,next)=>{
    Users.findAll().then(data=>{
        if(data.lenght <0){
            return res.status(400).json({
                message:'Not Found'
            })
        }else{
            return res.status(200).json({
                user_data:data
            })
        }
    }).catch(err=>{
        return res.status(500).json({
            message:err.message
        })
    })
}
exports.delete_user = (req,res,next)=>{
    Users.destroy({
        where: {
            user_id: req.body.user_id
        }
      }).then(data => {
        return res.status(200).json({
            message:"Deleted!"
        })
      }).catch(err=>{
          res.status(500).json({
              message:err.message
          })
      });
}
exports.login_user = (req,res,next)=>{
    Users.findAll({
        where: {
            username: req.body.username
        }
      }).then(data => {
         
        if(data.lenght < 1){
            return res.status(409).json({
                message:"Username exists"
            })
        }
      
        bcrypt.compare(req.body.password, data[0].password).then((result) =>{
            console.log(result)
            if(result){
                const user_data = {
                    user_id:data[0].user_id,
                    username:data[0].email,
                    prename:data[0].prename,
                    firstname:data[0].firstname,
                    lastname:data[0].lastname,
                    email:data[0].email,
                    position:data[0].position,
                    checkpoint_id:data[0].checkpoint_id
                }
                console.log(user_data)
                const token = jwt.sign(
                    {
                        user_id:data[0].user_id,
                        username:data[0].email,
                        prename:data[0].prename,
                        firstname:data[0].firstname,
                        lastname:data[0].lastname,
                        email:data[0].email,
                        position:data[0].position,
                        checkpoint_id:data[0].checkpoint_id
                    },
                        process.env.SERVER_KEY,
                    {
                        expiresIn:"7d"
                    })
                return res.status(200).json({
                    token:token,
                    user_data:user_data
                }) 
            }else{
                return res.status(401).json({
                    message:"Auth Failed"
                })
            } 
           
            }).catch((err)=>{
                return res.status(401).json({
                    message:"Error Auth"
                })
            });
        
      }).catch(err=>{
          res.status(500).json({
              message:err.message
          })
      });
}
// exports.update_checkpoint = (req,res,next)=>{
//     Checkpoint.update(req.body,{where:{checkpoint_id:req.body.checkpoint_id}}).then(data=>{
//         return res.status(200).json({
//             message:'Updated!'
//         })
//     }).catch(err=>{
//         return res.status(500).json({
//             message:err.message
//         })
//     })
// }