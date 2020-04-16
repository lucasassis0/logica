var user = require("readline-sync")

var p = user.question("Digite uma palavra: ")

var novaP = p.toUpperCase()

console.log(novaP)