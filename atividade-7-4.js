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

var dif = []
var d = 0

for (let x = 0; x < j2.length; x++) {
    for (let y = 0; y < j1.length; y++) {
        if (j1[x] != j2[y]) {
            d++
        }
    }
    if (d==5) {
        dif.push(j2[x])
        d=0
    }else{
        d=0
    }
}

console.log(dif.join(", "))