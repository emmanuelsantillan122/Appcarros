const express = require('express');
const router = express.Router();
const carController = require('../controller/carController');


router.post('/Enviar', carController.agregar);
router.get('/Mostrar', carController.mostrar);


module.exports = router;
