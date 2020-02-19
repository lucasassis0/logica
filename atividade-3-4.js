var user = require("readline-sync")

var n = user.questionInt("Digite um numero: ")

console.log("Os numeros pares de 0 a "+n+" sao: ")

for (let x = 0; x <= n; x++) {
    if (x%2 == 0) {
        console.log(x+"\n")
    }
}