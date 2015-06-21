'use strict';

var express = require('express');
var router = express.Router();
var giftwrap = require('../giftwrap');

//GET /
//Renders the dashboard

router.get('/', function(req, res) {
	res.json({
		name: "seraphim-envoy",
		version: giftwrap.version,
		codename: giftwrap.codename,
		date: giftwrap.date 
	});
});

module.exports = router;
