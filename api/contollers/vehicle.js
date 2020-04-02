const Vehicle = require('../models/vehicle');

exports.vehicle_list = (req,res,next)=>{
    Vehicle.findAll().then(data=>{
        if(data.length < 1){
            return res.status(400).json({
                message:'Not Found'
            })
        }
        return res.status(200).json({
            vehicle:data
        })
    }).catch(error=>{
        return res.status(500).json({
            message:error.message
        })
    })
}