var user = require("readline-sync")

var frase = user.question("Digite algo: ")

var novaFrase = frase.replace(/antilope/gi, "Kobus ellipsiprymnus")

console.log(novaFrase)