"use strict"

class Figura {

    #x = 0;
    #y = 0;
    #color = "#FFFFfF";

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        this.#color = "#FFFFFF";
    }

    pintar() {
        console.log("Nos vemos en la posicion (" + this.#x + ", " + this.#y + ")");
        console.log("Cogemos la pintura de color: " + this.#color);
    }
    
    esBlanca() { return this.#color === "#FFFFFF"; }

};

module.exports = Figura;