var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Xotaker = require('./class/class.xotaker.js');
var Amenaker = require('./class/class.amenaker.js');
var Gishatich = require('./class/class.gishatich.js');
var Grass = require('./class/class.grass.js');


app.use(express.static("public"));
app.get("/", function(req, res){
   res.redirect("public");


});

server.listen(3000);



