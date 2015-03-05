var mongoose = require("mongoose");

var counterModel = mongoose.model("counter", {
    getCounter: String,
    postCounter: String,
    putCounter: String,
    patchCounter: String,
    deleteCounter: String,
    created: {
        type: Date,
        default: Date.now
    }
}, "counter");

module.exports = counterModel;