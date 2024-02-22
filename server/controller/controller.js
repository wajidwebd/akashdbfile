const modelfilecalling = require('../model/model');
exports.create = (req,res)=>{
    const check = new modelfilecalling({
        firstname :req.body.firstname,
        number :req.body.number,
        ptime:req.body.ptime
    })


    check.save().then((dd)=>{
        console.log(dd);
        res.redirect('/patient');
    })
}


exports.find=(req,res)=>{
    modelfilecalling.find().then((users)=>{
        console.log(users);
        res.send(users)
    })
}