"use strict";

var mongoose = require("mongoose");
var httpModel = require("../models/http");

var express = require('express');
var router = express.Router();

var redis = require("redis");
var clientBackend = redis.createClient();

var async = require("async");

mongoose.connect("mongodb://localhost:27017/seraphim-envoy", function(err) {
    if(err)
        console.log(err);
});

//POST /http
//Main access point for gathering data
router.post('/http', function(req, res) {
    var data = new httpModel({
        request: req.body.request,
        from: req.body.from,
        to: req.body.to,
        headers: req.body.headers,
        content: req.body.content
    });

    async.parallel([
        function(callback) {
            clientBackend.publish("http", JSON.stringify(data));
        },
        function(callback) {
            data.save(function(err) {
                if(err) {
                    res.status(500).end();
                }
                res.status(200).end();
            });
        }
    ], function(err) {
        if(err)
            return next(err)
    });

});

module.exports = router;
