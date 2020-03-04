var fs = require("fs")
var user = require("readline-sync")

var carro = new Object()
carro.cor = user.question("Digite a cor: ")
carro.modelo = user.question("Digite o modelo: ")
carro.marca = user.question("Digite a marca: ")

console.log(carro)

var carSerial = JSON.stringify(carro)
var filepath = 'data/Carro.json'
fs.writeFileSync(filepath,carSerial)