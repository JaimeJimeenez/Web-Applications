"use strict"

function sequence_1(x, funs) {
    for (let i = 0; i < funs.length; i++) 
        funs[i](x);
}

function sequence_2(x, funs) {
    for (let i = 0; i < funs.length; i++)
        if (funs[i](x) === undefined) break;
}

function sequence_3(x, funs, ops = { }) {
    if (ops.right === true)
        for (let i = funs.length - 1; i >= 0; i--) {
            if (funs[i](x) === undefined) break;
        }
    else sequence_2(x, funs);
}