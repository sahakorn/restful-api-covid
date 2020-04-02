const QuarantinePlace = require('../models/quarantine_place');

exports.quarantine_place_list = (req,res,next)=>{
    QuarantinePlace.findAll().then(data=>{
        if(data.length < 1){
            return res.status(400).json({
                message:'Not Found'
            })
        }
        return res.status(200).json({
            quarantine_place:data
        })
    }).catch(error=>{
        return res.status(500).json({
            message:error.message
        })
    })
}