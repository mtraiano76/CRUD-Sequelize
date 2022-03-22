let db = require ("../database/models");

let peliculasControllers ={
    crear: function (req, res,){
        db.Genero.findAll()
        .then(function(generos){
            return res.render("listadosPeliculas", {generos:generos});

        })








    }
}
module.exports = peliculasControllers;