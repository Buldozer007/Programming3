var socket = io();
var side = 24;
var w = 30;
var h = 30;

function setup() {
    socket.on('gM', function (firstmatrix) {
        createCanvas(side * w, side * h);
        background("#acacac");
        frameRate(1);
    })

}

socket.on("Characters" , function (matrixArr) {
    //background("#acacac");
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
                fill("red");
            }
            else if (matrixArr[y][x] == 4) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }
     console.log(matrixArr);
})



