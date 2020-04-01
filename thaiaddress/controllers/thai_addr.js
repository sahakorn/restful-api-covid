const Provinces = require('../models/provinces');
const Amphures = require('../models/amphures');
const Districts = require('../models/districts');
exports.thai_addr = (req,res,next)=>{

    Provinces.findAll()
    .then(province => {
        if(province.length < 1){
            res.status(400).json({
                message:'Provinces Not Found'
            })
        }else{
                
                Amphures.findAll().then(amphure =>{
                    if(amphure.length <1){
                        res.status(400).json({
                            message:'Amphure Not Found'
                        })
                    }else{
                            Districts.findAll().then(district =>{
                                if(district.length <1){
                                    res.status(400).json({
                                        message:'District Not Found'
                                    })
                                }else{
                                 return  res.status(200).json({
                                    province:province,
                                    amphure:amphure,
                                    district:district
                                  })
                                  
                                   
                                }
                            }).catch(err=>{
                                res.status(404).json({
                                    message:err.message
                                })
                            })
                        
                     
                    }
                    
                   
                   
                }).catch(err=>{ 
                    res.status(404).json({
                        message:err.message
                    })
                })
        }
    })
    .catch(err => {
        // if error something
        res.status(404).json({
            message:err.message
        })
    })
};