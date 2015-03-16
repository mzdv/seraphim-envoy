"use strict";

var mongoose = require("mongoose");

var totalRequestsModel = mongoose.model("totalRequests", {
    requests: Number,
    timestamp: Date
}, "totalRequests");

module.exports = totalRequestsModel;