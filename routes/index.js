'use strict';

var express = require('express');
var router = express.Router();

require('node-jsx').install();

var React = require('react');
var App = React.createFactory(require('../bin/components/ReactApp.jsx'));

//GET /
//Renders the dashboard

router.get('/', function(req, res) {
    var markup = React.renderToString(App());
    res.render("index", {
        markup: markup
    });
});

module.exports = router;
