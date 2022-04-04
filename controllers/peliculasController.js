const req = require("express/lib/request");
let db = require ("../database/models");

let peliculasController = {
    crear: function (req, res,) {
        db.Genero.findAll()
        .then(function(generos) {
            return res.render("creacionPeliculas", {generos:generos});

        })
    },
    guardado: function (req, res) {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        });
        res.redirect("/peliculas");
    },
    listado: function (req, res){
        db.Pelicula.findAll()
            .then(function (peliculas) {
                res.render("listadoPeliculas", {peliculas:peliculas})
            })
    }, 
    detalle: function (req, res){
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"} , {association: "actores"}]
        })
        .then(function (pelicula) {
            res.render("detallePelicula", {pelicula:pelicula});
        })
    },
    editar: function (req,res) {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros]) //atencion a esto
            .then(function([pelicula, generos]) {
                res.render("editarPelicula", {pelicula:pelicula, generos:generos});
            })

    },
    actualizar: function(req, res) {
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/peliculas/" + req.params.id)
    },
    borrar: function(req, res) {
        db.Pelicula.destroy ({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/peliculas");

    }

}
module.exports = peliculasController;