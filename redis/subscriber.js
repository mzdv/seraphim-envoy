'use strict';

var redis = require('redis');
var subscriber = (redis.createClient)().subscribe('http');

module.exports = subscriber;
