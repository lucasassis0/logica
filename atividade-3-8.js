var user = require("readline-sync")

var palavra = user.question("Digite uma palavra: ")
var flag = 0

while (flag < palavra.length) {
    console.log(palavra.charAt(flag))
    flag++
}