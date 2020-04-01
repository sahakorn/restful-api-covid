const Checkpoint = require('../models/checkpoint')
const jwt = require('jsonwebtoken');
exports.create_checkpoint = (req,res,next)=>{
      const check_point = req.body
      Checkpoint.create(check_point).then(checkpoint_data =>{
          return res.status(200).json({
              message:'User created!',
              checkpoint_data:checkpoint_data
          })
      }).catch(err => {
          return res.status(500).json({
              message:err.message
          })
      });
}
exports.find_checkpoint = (req,res,next)=>{
    Checkpoint.findAll().then(data=>{
        if(data.lenght <0){
            return res.status(400).json({
                message:'Not Found'
            })
        }else{
            return res.status(200).json({
                checkpoint:data
            })
        }
    }).catch(err=>{
        return res.status(500).json({
            message:err.message
        })
    })
}

exports.delete_checkpoint = (req,res,next)=>{
    Checkpoint.destroy({
        where: {
            checkpoint_id: req.body.checkpoint_id
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
exports.update_checkpoint = (req,res,next)=>{
    Checkpoint.update(req.body,{where:{checkpoint_id:req.body.checkpoint_id}}).then(data=>{
        return res.status(200).json({
            message:'Updated!'
        })
    }).catch(err=>{
        return res.status(500).json({
            message:err.message
        })
    })
}