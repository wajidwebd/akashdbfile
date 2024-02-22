const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

 const app = express()

  mongoose.connect("mongodb+srv://mydata:1@cluster0.cfbdxtv.mongodb.net/patientdata",{}).then(()=>{
      console.log("mangodb connected");
  })


app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/",require ('./server/routes/routes'));







  app.listen(10000,()=>console.log('port connected'))