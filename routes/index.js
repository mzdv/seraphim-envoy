"use strict";

var express = require('express');
var router = express.Router();

//GET /
//Renders the dashboard
router.get('/', function(req, res) {
    res.render("index", {
        title: "seraphim-envoy"
    });
});

module.exports = router;
