var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    email:{
        type:String,
    },
    author:{
        type:String,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

var Content = mongoose.model("Blog" , blogSchema);
module.exports = Content;