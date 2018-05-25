var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
global.Xotaker = require('./class/class.xotaker.js');
global.Amenaker = require('./class/class.amenaker.js');
global.Gishatich = require('./class/class.gishatich.js');
global.Grass = require('./class/class.grass.js');
global.Parent = require('./class/class.parent.js')


app.use(express.static("public"));
app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000);

global.matrix = [];
global.season = "Winter";
var w = 30;
var h = 30;
var side = 24;
global.grassArr = [], global.xotakerArr = [], global.gishatichArr = [], global.amenakerArr = [];


io.on('connection' , function (){

function setup() {
    function genMatrix(w, h) {
        var matrixArr = [];
        for (var y = 0; y < h; y++) {
            matrixArr[y] = [];
            for (var x = 0; x < w; x++) {
                var r = Math.floor(Math.random () * 100)
                if (r < 20) r = 0;
                else if (r < 40) r = 1;
                else if (r < 60) r = 2;
                else if (r < 80) r = 3;
                else if (r < 100) r = 4;
                matrixArr[y][x] = r;
            }
        }
        return matrixArr;
    }
    matrix = genMatrix(w, h);
}

io.sockets.emit('gM' , matrix);
setup();

function Characters() {
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

    io.sockets.emit('Characters' , matrix);

}

function changeSeason() {
    if(season == "Winter") {
        season = "Spring";
    }
    else if(season == "Spring") {
        season = "Summer";
    }
    else if(season == "Summer") {
        season = "Fall";
    }
    else if(season == "Fall") {
        season = "Winter";
    }
    io.sockets.emit('cS' , season);
};

setInterval(Characters, 1000);
setInterval(changeSeason , 3000);

})