var Parent = reqiure("./class.parent.js");

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
    yntrelVandak(ch) {
        this.stanalNorKoordinatner();
        return super.yntrelVandak(ch);
    }

    paytyun() {
        var vandakner = this.paytyuniKoordinatner();
        if(vandakner)
    }
}


