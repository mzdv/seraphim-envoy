'use strict';

var redis = require("redis");
var subscriber = redis.createClient();

subscriber.subscribe("http");

module.exports = subscriber;