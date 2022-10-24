"use strict"

let Figura = require("./figure.js")

class Elipse extends Figura {

    #rh = 0;
    #rv = 0;

    constructor(x, y, rh, rv) {
        super(x, y);
        this.#rh = rh;
        this.#rv = rv;
    }

    pintar() {
        super.pintar();
        console.log("Pintamos elipse de radios " + this.#rh + " y " + this.#rv);
    }
}

module.exports = Elipse;