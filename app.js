var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var multer = require('multer');
var fs = require('fs');
var DBRouter = require('./routes/DB');
require('dotenv').config();

var app = express();
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './res/uploads')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '_' + Date.now()+ '.' +extension)
  }
})
const upload = multer({storage: storage, limits: { fileSize: 8*1024*1024} }).single("nft_file");
app.use(cors());

app.use(express.json({limit: 8*1024}));
app.use(express.urlencoded({ extended: true, }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'res/uploads')));
app.use(express.static(path.join(__dirname,'./build')));
app.post("/upload", (req, res) => {
   upload(req, res, (err) => {
   console.log("Form data:"+ req.body.nftName)
   let nfts = {
      nftName : req.body.nftName,
      nftDescription : req.body.nftDescription,
      nftPrice : req.body.nftPrice+"BNB",
      ipfsHash : "https://"+req.body.ipfsHash+".ipfs.dweb.link",
      nftURI : "http://"+req.header('host')+'/'+metadata,
      nftImage : "http://"+req.header('host')+'/'+req.file.filename,
      server : "http://"+req.header('host')+'/'
   }
    if(err) {
      console.log(err);
      res.status(400).json({error: err.code});
    }
    res.json(nfts);
  });
});


app.use('/nfts', DBRouter);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./build/index.html")
  );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
