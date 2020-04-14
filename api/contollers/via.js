const Via = require('../models/via')
exports.all_income = (req,res,next)=>{
    Via.findAll().then(data=>{
        if(data.lenght <0){
            return res.status(400).json({
                message:'Not Found'
            })
        }else{
            return res.status(200).json({
                data:data
            })
        }
    }).catch(err=>{
        return res.status(500).json({
            message:err.message
        })
    })
}