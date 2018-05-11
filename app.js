var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Xotaker = require('./class/class.xotaker.js');
var Amenaker = require('./class/class.amenaker.js');
var Gishatich = require('./class/class.gishatich.js');
var Grass = require('./class/class.grass.js');


app.use(express.static("public"));
app.get("/", function (req, res) {
    res.redirect("public");


});

server.listen(3000);

var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [], xotakerArr = [], gishatichArr = [], amenakerArr = [];

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(120);
            if (r < 20) r = 0;
            else if (r < 65) r = 1;
            else if (r < 90) r = 2;
            else if (r < 100) r = 3;
            else if (r < 120) r = 4;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

function setup() {
    matrix = genMatrix(w, h);
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3))
            }
            else if (matrix[y][x] == 4) {
                amenakerArr.push(new Amenaker(x * 1, y * 1, 4))
            }
        }
    }
}

io.on("connection", function (socket) {
    io.sockets.emit("gen matrix", matrix);

    socket.on('send matrix', function (data) {
            io.sockets.emit('gen matrix', data)
    })
});

function Characters() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].utel();
        amenakerArr[i].sharjvel();
        amenakerArr[i].mahanal();
    }
}

setInterval(Characters, 200);




