var fasam = require("fasam-imc-calc")
var user = require("readline-sync")

var peso = user.questionFloat("Peso: ")
var altura = user.questionFloat("Altura: ")

var imc = new fasam(peso, altura)

console.log("IMC: "+imc.calc())