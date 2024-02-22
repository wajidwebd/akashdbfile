exports.doctor = (req,res)=>{
    res.render('doctor')
}

const axios = require('axios');

exports.patient=(req,res)=>{
    axios.get('http://localhost:10000/api/users').then(function (myresponse) {
        console.log(myresponse);
        res.render("patient",{users:myresponse.data})

    })


}

