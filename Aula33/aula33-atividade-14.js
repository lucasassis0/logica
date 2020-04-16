var obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
}

var {a,b,c,d} = obj

var v1 = {a}
var v2 = {b}
var v3 = {c, d}

console.log(v1, v2, v3);