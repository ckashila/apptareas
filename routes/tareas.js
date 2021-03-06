var express = require('express');
var router = express.Router();

var tasques = [
	{
		"nom":"Diseño wireframe",
		"etiquetes": [ "wireframe","app","hibrida"],
		"realització":25
	},
	{
		"nom":"Reunión",
		"etiquetes": ["app","hibrida"],
		"realització":"50"
	},
	{
		"nom":"Desarrollo Layout",
		"etiquetes": [ "layout","app","hibrida"],
		"realització":"75"
	},
	{
		"nom":"Reunión cliente",
		"etiquetes": [ "reunión","app","hibrida"],
		"realització":"100"
	}
]


router.get('/', function(req, res, next) {
  res.render('tareas', {title: 'Tareas', tareas:tasques});
});

router.get('/nueva', function(req, res, next) {
  res.render('nuevaTarea', {title: 'Nueva Tarea'});
});

router.post('/crear', function(req, res, next) {
  var nom = req.body.nom;
  var eti = req.body.etiquetes;
  var rea = req.body.realització;
  tasques.push({nom: nom,
                etiquetes: eti,
                realització: rea
  });
});

module.exports = router;
