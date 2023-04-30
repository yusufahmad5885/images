const express = require("express");
const app = express();
const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image uploaded");
});

app.listen(3001);
console.log("3001 is good");

/*
Summary of proj
    -Uploaded images with multer
    -Uploaded images in nodejs application in the api, and be able to upload those images to my file system
    -Working with ejs, allows simple html file to upload and access backend variables
    -Installed multer, which allows you to acess files being uploaded to your frontend and manipulate them to upload and create the files to the filesystem

*/
