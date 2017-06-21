'use strict'
const express   = require("express");
const multer    = require('multer');
const path      = require("path");

const port = process.env.PORT;
const upload = multer({dest: __dirname + '/uploads'});
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res){
   res.render('index', {status: 'No file chosen'});
});

app.use('/upload', upload.single('file'), function(req, res, next){
    res.send(req.file);
})


app.listen(port, function(){
    console.log('fileSizeGetter is listening on port: ' + port);
});
