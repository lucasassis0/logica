var user = require("readline-sync")

var palavra = user.question("Digite uma palavra: ")

if (palavra.endsWith("al") == true) {
    console.log(palavra)
}else{
    console.log("Palavra não identificada.")
}