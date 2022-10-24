"use strict"

let Elipse = require("./elipse.js");

class Circle extends Elipse {

    constructor(x, y, r) {
        super(x, y, r, r);
    }

}

module.exports = Circle;