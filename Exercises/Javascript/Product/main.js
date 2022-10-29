"use strict"

let number1 = 12;
let number2 = 24;
let x = new Array (1, 2);
let y = new Array (3, 4);

function product(x, y) {
    if (typeof x === 'number' && typeof y === 'number') return x * y;
    else if (typeof x === 'number' && y instanceof Array) return y.map(n => n * x);
    else if (x instanceof Array && y instanceof Array) {
        if (x.length !== y.length) throw new Error("Vectors are not the same size");
        else {
            let count = 0;
            for (let i = 0; i < x.length; i++) count += x[i] * y[i];
            return count;
        }
    }
    else throw new Error("Exception throwed");
}

console.log(product(number1, number2));
console.log(product(number1, y));
console.log(product(x, y));