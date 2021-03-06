var Parent = require('./class.parent.js');

module.exports = class Gishatich extends Parent {
    constructor(x, y, index,ser) {
        super(x,y,index,ser);
    }
    yntrelVandak(ch) {
        this.stanalNorKoordinatner();
        return super.yntrelVandak(ch);
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

    sharjvel() {
        var vand = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
        }
    }

    utel() {
        this.energy--;
        var vand = this.yntrelVandak(2)[Math.floor(Math.random() * this.yntrelVandak(2).lenght)];
        if (vand && this.multiply >= this.speed / 2) {
            //console.log("Hoshoteci");
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var vandak = this.yntrelVandak(3.5)[Math.floor(Math.random() * this.yntrelVandak(3.5).length)];
        }
        else if (this.ser == "igakan") {
            var vandak = this.yntrelVandak(3)[Math.floor(Math.random() * this.yntrelVandak(3).length)];
        }
        if(vandak){
            var vand = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        }
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newgishatich = new Gishatich(vand[0], vand[1], 3);
            gishatichArr.push(newgishatich);
        }

    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}