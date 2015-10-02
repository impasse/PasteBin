var express = require('express');
var router = express.Router();
var db = require('../db');
var utils = require('../utils');
/* GET home page. */
router.get('/*', function (req, res) {
	if (req.originalUrl == '/') {
		res.render('index');
	} else {
		db.get(req.params[0], function (error, data) {
			if (data)
				res.render('index',{text:data});
			else
				res.send('Not Found');
		});
	}
});

router.post('/add', function (req, res) {
		if(!req.body.text){
		res.redirect('/');
		return;
	}else{
		var str = new Date()+req.body.text;
		var min = utils.shortly(str);
		db.set(min,req.body.text,function(error){
			if(error){
				console.error(error);
			}else{
				var s = 'http://'+req.header('host')+'/'+min;
				res.render('result',{url:s});
			}				
		});
	}
})

module.exports = router;
