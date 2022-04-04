
var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController');

// Creacion
router.get("/crear", peliculasController.crear);

router.post("/crear", peliculasController.guardado);

//Lectura
router.get ("/",peliculasController.listado);

module.exports = router;
