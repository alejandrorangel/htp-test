var env = process.env.NODE_ENV || "development";
var port = process.env.PORT || 8080;

var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
    //__dirname : It will resolve to your project folder.
});



app.listen(port);
console.log('Magic happens at http://localhost:' + port);
