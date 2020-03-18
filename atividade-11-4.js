var user = require("readline-sync")
var testPrime = require("prime-number")

var num = user.questionInt("Insira um numero: ")

if (testPrime(num)) {
    console.log("É primo!!")
}else{
    console.log("Não é primo!!")
}