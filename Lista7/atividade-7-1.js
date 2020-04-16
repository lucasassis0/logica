var user = require("readline-sync")

var numProd = user.questionInt("Digite a quantidade de produtos: ")
var x = 0
var prod = []
var soma = 0

while (x < numProd) {
    prod[x] = user.questionFloat("Valor do produto: ")
    soma = soma + prod[x]
    x++
}

var vPago = user.questionFloat("Valor pago: ")

for (let x = 0; x < prod.length; x++) {
    console.log("Produto "+(x+1)+": R$"+prod[x].toFixed(2))
}

console.log("Valor da compra: R$"+soma.toFixed(2))
console.log("Valor pago: R$"+vPago.toFixed(2))
if (vPago > soma) {
    console.log("Troco: "+(vPago-soma).toFixed(2))
    console.log("Obrigado, Volte sempre.")
}else if (vPago == soma) {
    console.log("Obrigado, Volte sempre.")
}else{
    console.log("O valor pago é insuficiente. A compra foi cancelada.")
}