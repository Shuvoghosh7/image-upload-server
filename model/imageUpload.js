const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    Imgname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    }
});


// create model

const users = new mongoose.model("users",imageSchema);

module.exports = users;

