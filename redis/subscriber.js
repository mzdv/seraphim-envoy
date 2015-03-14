var redis = require("redis");
subscriber = redis.createClient();

subscriber.subscribe("http");

module.exports = subscriber;