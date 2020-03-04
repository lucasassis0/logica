var user = require("readline-sync")

var palavra = user.question("Digite o nome: ")

console.log("A terceira letra é: "+palavra.charAt(2))