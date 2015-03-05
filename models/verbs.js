var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var verbModel = {};

var dataSchema = new Schema({
    counter: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

verbModel.getModel = mongoose.model("get", dataSchema, "get");
verbModel.postModel = mongoose.model("post", dataSchema, "post");
verbModel.putModel = mongoose.model("put", dataSchema, "put");
verbModel.patchModel = mongoose.model("patch", dataSchema, "patch");
verbModel.deleteModel = mongoose.model("delete", dataSchema, "delete");

module.exports = verbModel;