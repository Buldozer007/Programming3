module.exports = class Parent {
    constructor(x, y, index,ser) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = Math.round(Math.random() * 24);
        this.multiply = Math.round(Math.random() * 24);
        this.speed = 24;
        this.ser = (ser == 0 ? "arakan" : "igakan");
        matrix[this.y][this.x] = this.index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


} 