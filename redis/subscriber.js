var redis = require("redis");
subscriber = redis.createClient();

subscriber.subscribe("http");
subscriber.subscribe("net");
subscriber.subscribe("system");

module.exports = subscriber;