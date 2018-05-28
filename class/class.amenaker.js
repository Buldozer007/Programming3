var Parent = require('./class.parent.js');

module.exports = class Amenaker extends Parent {
    constructor(x, y, index,ser) {
        super(x, y, index,ser);
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

    yntrelVandak(ch) {
        this.stanalNorKoordinatner();
        return super.yntrelVandak(ch);
    }

    sharjvel() {
        var vandak = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)]
        if (vandak && this.multiply >= this.speed / 4) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 4;
        }
    }
    utel() {
        this.energy -= 3;
        this.multiply += 3;
        var vand = this.yntrelVandak(1 || 2 || 3)[Math.floor(Math.random()* this.yntrelVandak(1 || 2 || 3).length)]
        if (vand && this.multiply >= this.speed / 2) {
            // console.log('kera');
            this.energy += this.speed / 4;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }

        }
        else this.sharjvel();
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var vandak = this.yntrelVandak(4.5)[Math.floor(Math.random() * this.yntrelVandak(4.5).length)];
        }
        else if (this.ser == "igakan") {
            var vandak = this.yntrelVandak(4)[Math.floor(Math.random() * this.yntrelVandak(4).length)];
        }
        if (vandak) {
            var vand = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        }
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newamenaker = new Amenaker(vand[0], vand[1], 4);
           amenakerArr.push(newamenaker);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            //console.log('X_X');
            matrix[this.y][this.x] = 0;
            for (var i in amenakerArr) {
                if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                    amenakerArr.splice(i, 1);
                }
            }
        }
    }


}