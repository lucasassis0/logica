var user = require("readline-sync")

function absoluto(n) {
    return Math.abs(n)
}

var num = user.question("Digite um numero: ")

console.log("O numero absoluto é: "+absoluto(num))