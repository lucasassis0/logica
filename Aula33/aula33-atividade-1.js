//Exercicio 1 - A (Para todas as formas de declarar variáveis)

function teste() {
    var alfa = "testando"
    let beta = "123"
    const gama = "teste"
}

console.log(alfa);
console.log(beta);
console.log(gama);

//Exercicio 1 - B (Para todas as formas de declarar variáveis)

for (var i = 0; i < 10; i++) {
    let j = 100
    const k = 3.14
}

console.log(i);
console.log(j);
console.log(k);

//Exercicio 1 - C (Para todas as formas de declarar variáveis)

var a = "c"
var a = "C"

let b = "o"
let b = "O"

const c = "é"
const c = "É"

console.log(a);
console.log(b);
console.log(c);

//Exercicio 1 - D (Para todas as formas de declarar variáveis)

var x = 0
let y = 1
const z = 2

function exD() {
    var x = 1
    let y = 2
    const z = 3

    console.log(x);
    console.log(y);
    console.log(z);
}

exD()

//Exercicio 1 - E (Para todas as formas de declarar variáveis)

var ar = 0
let by = 1
const te = 2

function exD() {
    var ar = 1
    let by = 2
    const te = 3
}

console.log(ar);
console.log(by);
console.log(te);

//Exercicio 1 - F (Para todas as formas de declarar variáveis)

var ne = "c"
console.log(ne);
var ne = "C"
console.log(ne);

let u = "o"
console.log(u);
let u = "O"
console.log(u);

const ra = "é"
console.log(ra);
const ra = "É"
console.log(ra);