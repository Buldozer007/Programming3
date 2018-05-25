var socket = io();
var side = 24;
var w = 30;
var h = 30;

function setup() {
    socket.on('gM', function (firstmatrix) {
        createCanvas(side * w, side * h);
        background("#acacac");
        frameRate(5);
    })

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
                        if(currentSeason == "Winter"){  
                            fill("white");
                        }
                        else if(currentSeason == "Spring" || "Summer"){ 
                            fill("green");
                        }
                        else if(currentSeason == "Fall"){   
                            fill("#73C6B6");
                        }
                    }
                    else if (matrixArr[y][x] == 2) {
                        if(currentSeason == "Winter"){  
                            fill("#F9E79F");
                        }
                        else if(currentSeason == "Spring"){ 
                            fill("orange");
                        }
                        else if(currentSeason == "Summer"){ 
                            fill("yellow");
                        }
                        else if(currentSeason == "Fall"){   
                            fill("#E59866");
                        }
                    }
                    else if (matrixArr[y][x] == 3) {
                        if (currentSeason == "Winter") {
                            fill("#E6B0AA");
                        }
                        else if (currentSeason == "Spring" ) {
                            fill("#CD6155");
                        }
                        else if(currentSeason == "Summer"){ 
                            fill("red");
                        }
                        else if (currentSeason == "Fall") {
                            fill("#CD5C5C");
                        }
                    }
                    else if (matrixArr[y][x] == 4) {
                        if(currentSeason == "Winter"){  
                            fill("#CD6155");
                        }
                        else if(currentSeason == "Spring"){ 
                            fill("#1F618D");
                        }
                        else if(currentSeason == "Summer"){ 
                            fill("blue");
                        }
                        else if(currentSeason == "Fall"){   
                            fill("#3498DB");
                        }
                    }
                    rect(x * side, y * side, side, side);
                }
            }

        })
    }

    socket.on('cS', currentSeason);
 
}





