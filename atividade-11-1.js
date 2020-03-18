var median = require("median")
var user = require("readline-sync")

var valores = []

function recebeValor() {
    for (let x = 0; x < 4; x++) {
        valores[x] = user.questionFloat("Digite o valor: ")
    }
}

recebeValor()

var media = median(valores)

console.log("A media é: "+media)