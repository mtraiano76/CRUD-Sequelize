
var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController');

// Creacion (C)
router.get("/crear", peliculasController.crear);

router.post("/crear", peliculasController.guardado);

//Lectura (R)
router.get ("/",peliculasController.listado);

//Detalle (D)

router.get("/:id", peliculasController.detalle);

//Actualizacion (U)

router.get ("/editar/:id", peliculasController.editar);
router.post ("/editar/:id", peliculasController.actualizar);

//Borrado
router.post("/borrar/:id", peliculasController.borrar);

module.exports = router;
