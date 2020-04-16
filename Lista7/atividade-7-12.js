var user = require("readline-sync")

var palavra = user.question("Digite uma palavra: ")

var vog = ['a', 'à', 'á', 'A', 'e', 'é','E','i','í','I','o','ó','O','u','ú','U']

var n = 0

for (let x = 0; x < vog.length; x++) {
    n = palavra.indexOf(vog[x])
    if(n > -1){
        console.log("Possui vogal!")
        break
    }
}
if (n == -1) {
    console.log("Não possui vogais!")
}