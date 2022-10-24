"use strict"

const Elipse = require("./elipse.js");
const Circle = require("./circle.js");
const Figura = require("./figure.js");

let figure = new Figura(2, 3);
figure.pintar();
console.log(figure.esBlanca());

let elipse = new Elipse(7, 8, 9, 10);
elipse.pintar();
console.log(elipse.esBlanca());

let circle = new Circle(4, 5, 6);
circle.pintar();
console.log(circle.esBlanca());