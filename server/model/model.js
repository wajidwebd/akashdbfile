const mongoose = require ('mongoose');
const mongoosefileds = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    
    number:{
        type:String,
        required:true
    },
    
    ptime:{
        type:String,
        required:true
    }
    
})
const mongoosefiledsexports = mongoose.model("PatientDatabasecollection",mongoosefileds);

 module.exports=mongoosefiledsexports;