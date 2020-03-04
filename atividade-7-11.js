var user = require("readline-sync")

var palavra = user.question("Digite uma palavra: ")

if (palavra.includes("np") == true) {
    console.log("A palavra está escrita de forma errada. Antes de P ou B utiliza-se M.")
}else if (palavra.includes("nb") == true) {
    console.log("A palavra está escrita de forma errada. Antes de P ou B utiliza-se M.")
}else{
    console.log("A palavra está certa.")
}