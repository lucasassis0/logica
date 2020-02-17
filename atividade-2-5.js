var user = require("readline-sync")

var salMin = user.questionFloat("Salario minimo: ") //valor atual do salário mínimo é de R$1039,00

var kw = (salMin/7)/100
console.log("O valor do Kw é de R$"+kw.toFixed(2))

//aplicando o desconto de 10%
kw = kw - kw*0.1
console.log("O novo valor do Kw é de R$"+kw.toFixed(2))