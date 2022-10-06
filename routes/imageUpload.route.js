const express = require("express");
const router = new express.Router();
const multer = require('multer')
const path = require("path")
const uploadedImage = require("../model/imageUpload");

const storage = multer.diskStorage({
    destination: "images/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})
const uploader = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const suppatedImage = /png|jpg|webp|pdf/;
        const extension = path.extname(file.originalname)

        if (suppatedImage.test(extension)) {
            cb(null, true);
        } else {
            cb(new Error("Must be  file"));
        }
    },
    limits: {
        fieldSize: 5000000,
    }
})

const upload = multer({
    storage:storage,
    files:uploader
});

router.post("/upload-img",upload.single("photo"),async(req,res)=>{

    const {filename} = req.file;

    const {imgname} = req.body;

    if(! imgname || !filename){
        res.status(401).json({status:401,message:"fill all the data"})
    }
    try {
        const userdata = new uploadedImage({
            imgname:imgname,
            imgpath:filename,
        });
        const finaldata = await userdata.save();
        res.status(201).json({status:201,finaldata});
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

module.exports = router;