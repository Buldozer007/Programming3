var socket = io();

function setup() {
    createCanvas(800, 800);
    background("#acacac");
    frameRate(5);
}

function genMatrix(matrix) {
    //background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }
    //socket.emit("send matrix", matrix);


    // console.log(matrix);


}


socket.on("gen matrix", genMatrix);
