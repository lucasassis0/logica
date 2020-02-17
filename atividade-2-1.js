var user = require("readline-sync")

var vprod = user.questionFloat("Qual o valor do produto: ")

var moeda1 = user.questionInt("Quantas moedas de 1 real possui em seu cofrinho: ")
var moeda50 = user.questionInt("Quantas moedas de 50 centavos possui em seu cofrinho: ")
var moeda25 = user.questionInt("Quantas moedas de 25 centavos possui em seu cofrinho: ")
var moeda10 = user.questionInt("Quantas moedas de 10 centavos possui em seu cofrinho: ")
var moeda05 = user.questionInt("Quantas moedas de 5 centavos possui em seu cofrinho: ")
var moeda01 = user.questionInt("Quantas moedas de 1 centavo possui em seu cofrinho: ")

var tot50 = moeda50 * 0.5
var tot25 = moeda25 * 0.25
var tot10 = moeda10 * 0.1
var tot05 = moeda05 * 0.05
var tot01 = moeda01 * 0.01

var total = moeda1 + tot50 + tot25 + tot10 + tot05 + tot01

if(total >= vprod){
    console.log("Voce possui R$"+total.toFixed(2)+" reais, logo, você pode comprar o produto.")
}else{
    console.log("Voce possui R$"+total.toFixed(2)+" reais, logo, nao possui dinheiro suficiente para comprar o produto.")
}