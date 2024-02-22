const express = require('express');
const routes = express.Router();


const renderfilecalling = require('../services/services');

const controllerfilecalling = require('../controller/controller')


 routes.get('/',renderfilecalling.doctor);

 routes.get('/patient',renderfilecalling.patient);

 routes.post('/api/users',controllerfilecalling.create);
 
 routes.get('/api/users',controllerfilecalling.find);


 module.exports=routes