var mongoose = require("mongoose");
var httpModel = require("../models/http");

var express = require('express');
var router = express.Router();

var redis = require("redis");
clientBackend = redis.createClient();

mongoose.connect("mongodb://localhost:27017/seraphim-reborn", function(err) {
    if(err)
        console.log(err);
});

// POST /http used for http data (requests incoming etc etc)
router.post('/http', function(req, res) {
    var data = new httpModel({
        request: req.body.request,
        from: req.body.from,
        to: req.body.to,
        headers: req.body.headers,
        content: req.body.content
    });


    clientBackend.publish("http", JSON.stringify(data));

    data.save(function(err) {
        if(err) {
            res.status(500).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
