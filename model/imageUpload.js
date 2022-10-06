const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    imgname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    }
});


// create model

const uploadedImage = new mongoose.model("uploadedImage",imageSchema);

module.exports = uploadedImage;

