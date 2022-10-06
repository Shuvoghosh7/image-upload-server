const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
/* const imageUploadRoute=require('./route/imageUpload.route')
 */


app.get("/", (req, res) => {
  res.send("Route is working! YaYs!");
});

// route colling
/* app.use("/api/v1/",imageUploadRoute,express.static("./images"))
 */

module.exports = app;
