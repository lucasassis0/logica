var carro = require("./carro-exercicio-12-6.js") //INCOMPLETO
var user = require("readline-sync")

var car = new carro.carro

console.log("Insira a seguir os atributos do carro:")

car.nome = user.question("Nome: ")
car.cor = user.question("Cor: ")

car.menu()