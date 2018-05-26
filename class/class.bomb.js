var Parent = require("./class.parent.js");

module.exports = class Bomb extends Parent {
    constructor(x, y, index) {
        super(x, y, index);
    this.paytyuniUxutyunner = [
        [this.x , this.y],
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1],
        [this.x - 2, this.y - 2],
        [this.x, this.y - 2],
        [this.x + 2, this.y - 2],
        [this.x - 2, this.y],
        [this.x + 2, this.y],
        [this.x - 2, this.y + 2],
        [this.x, this.y + 2],
        [this.x + 2, this.y + 2]
    ] 
    }
    stanalNorKoordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    paytyuniKoordinatner (){
        return this.paytyuniUxutyunner = [
            [this.x , this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ]    
    }
    yntrelVandak(ch) {
        this.stanalNorKoordinatner();
        return super.yntrelVandak(ch);
    }
    maqrelVandakner(k , z){  
        for (var i in z) {
            if (z[i].x == k[0] && z[i].y == k[1]) {
                z.splice(i, 1);
                break;
            }
        }
    }

    paytyun() {
        var vandakner = this.paytyuniKoordinatner();
        if(vandakner){  
            for(var i in vandakner) {
                var x = vandakner[0], y = vandakner[1];
                if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    matrix[y][x] = 5;
                }
                if(matrix[vandakner[i][1]][vandakner[i][0]]==1){
                   this.maqrelVandakner([vandakner[i][0],vandakner[i][1]],grassArr);
                }
                else if(matrix[vandakner[i][1]][vandakner[i][0]]==2){
                   this.maqrelVandakner([vandakner[i][0],vandakner[i][1]],xotakerArr);
                }
                else if(matrix[vandakner[i][1]][vandakner[i][0]]==3){
                   this.maqrelVandakner([vandakner[i][0],vandakner[i][1]],gishatichArr);
                }
                else if(matrix[vandakner[i][1]][vandakner[i][0]]==4){
                   this.maqrelVandakner([vandakner[i][0],vandakner[i][1]],amenakerArr);
                }
                matrix[vandakner[i][1]][vandakner[i][0]]=0;
            }
        }
    }
}


