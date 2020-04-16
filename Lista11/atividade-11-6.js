var chalk = require("chalk")
var user = require("readline-sync")
var testPrime = require("prime-number")

var num = user.questionInt("Insira um numero: ")

if (testPrime(num)) {
    console.log(chalk.green("É primo!!"))
}else{
    console.log(chalk.red("Não é primo!!"))
}