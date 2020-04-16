var fs = require("fs")
var user = require("readline-sync")

var carSerial = fs.readFileSync('data/Carro.json')
var carro = JSON.parse(carSerial)

console.log(carro)

carro.cor = user.question("Digite a cor: ")
carro.modelo = user.question("Digite o modelo: ")
carro.marca = user.question("Digite a marca: ")

console.log(carro)

var carSerial = JSON.stringify(carro)
var filepath = 'data/Carro.json'
fs.writeFileSync(filepath,carSerial)