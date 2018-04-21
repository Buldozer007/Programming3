var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

server.listen(3000);


var Grass = require('./class.grass.js');
