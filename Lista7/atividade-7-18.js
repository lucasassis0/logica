var user = require("readline-sync")

var p = user.question("Digite uma palavra: ")

var novaP = p.toLocaleLowerCase()

console.log(novaP)