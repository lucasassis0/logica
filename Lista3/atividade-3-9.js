var user = require("readline-sync")

var palavra = user.question("Digite uma palavra: ")
var n = palavra.length
var resp = ""

for (x = 0; x < palavra.length; x++) {
    n--
    resp = resp + palavra.charAt(n)
}
console.log(resp)