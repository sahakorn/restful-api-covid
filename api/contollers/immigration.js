const Immigration = require('../models/immigration')
exports.create_immigration = (req,res,next)=>{
    const req_data = req.body
    Immigration.findAll({where:{pid:req.body.pid}}).then(person=>{
        if(person.length > 0){
            return res.status(401).json({
                message:"conflig"
            })
        }else{
            Immigration.create(req_data).then(data =>{
                return res.status(200).json({
                    message:'User created!',
                    data:data
                })
            }).catch(err => {
                console.log(err.message)
                return res.status(500).json({
                    message:err.message
                })
            });
        }
       
    }).catch(err=>{
        return res.status(500).json({
            message:err.message
        })
    })
   
}
exports.find_immigration = (req,res,next)=>{
    Immigration.findAll().then(data=>{
        if(data.lenght <0){
            return res.status(400).json({
                message:'Not Found'
            })
        }else{
            return res.status(200).json({
                Immigration:data
            })
        }
    }).catch(err=>{
        return res.status(500).json({
            message:err.message
        })
    })
}