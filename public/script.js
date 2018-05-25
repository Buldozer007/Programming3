var socket = io();
var side = 24;
var w = 30;
var h = 30;

function setup() {

    function currentSeason(ss) {
        document.getElementById('season').textContent = ss;
        var currentSeason = ss;
        socket.on("Characters", function (matrixArr) {
            for (var y in matrixArr) {
                for (var x in matrixArr[y]) {
                    if (matrixArr[y][x] == 0) {
                        fill("#acacac");
                    }
                    else if (matrixArr[y][x] == 1) {
                        fill("green");
                    }
                    else if (matrixArr[y][x] == 2) {
                        fill("yellow");
                    }
                    else if (matrixArr[y][x] == 3) {
                        if (currentSeason == "Winter") {
                            fill("#F08080");
                        }
                        else if (currentSeason == "Spring" || "Summer") {
                            fill("red");
                        }
                        else if (currentSeason == "Fall") {
                            fill("#CD5C5C");
                        }
                    }
                    else if (matrixArr[y][x] == 4) {
                        fill("blue");
                    }
                    rect(x * side, y * side, side, side);
                }
            }

        })
    }

    socket.on('cS', currentSeason);

    socket.on('gM', function (firstmatrix) {
        createCanvas(side * w, side * h);
        background("#acacac");
        frameRate(1);
    })

}





