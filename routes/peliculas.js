
var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController');

// Creacion
router.get("/crear", peliculasController.crear)

module.exports = router;
