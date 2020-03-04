var user = require("readline-sync")

function volEsfera(raio) {
    return (4/3)*3.14*Math.pow(raio,3)
}

var valor = user.questionFloat("Digite o valor do raio: ")

console.log("Volume da esfera: "+volEsfera(valor).toFixed(2))