var user = require("readline-sync") //INCOMPLETO

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

var novo = []
var igual = []
var d = 0



for (let x = 0; x < j1.length; x++) {
    for (let y = 0; y < j2.length; y++) {
        if (j1[x] == j2[y]) {
            j1.splice(x,1)
            x--
        }
    }
}

novo = j1.concat(j2)

var tam = novo.length
var aux = 0
for (tam; tam > 0; tam--) {
    for (let x = 0; x < novo.length; x++) {
        if (novo[x] > novo[x+1]) {
            aux = novo[x]
            novo[x] = novo[x+1]
            novo[x+1] = aux
        }
    }
}

console.log(novo.join(", "))