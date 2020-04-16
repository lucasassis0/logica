var user = require("readline-sync")

var jogador1 = user.question("Nome do jogador 1: ")
var jogador2 = user.question("Nome do jogador 2: ")

var j1 = []
var j2 = []

for (let x = 0; x < 5; x++) {
    j1[x] = user.questionInt(jogador1+" Insira um numero: ")
}

for (let x = 0; x < 5; x++) {
    j2[x] = user.questionInt(jogador2+" Insira um numero: ")
}

var igual = []

for (let x = 0; x < j1.length; x++) {
    for (let y = 0; y < j2.length; y++) {
        if (j1[x] == j2[y]) {
            igual.push(j2[y])
        }
    }
}
console.log(jogador1+" Digitou: "+j1.join(", "))
console.log(jogador2+" Digitou: "+j2.join(", "))
console.log(igual.join(", "))