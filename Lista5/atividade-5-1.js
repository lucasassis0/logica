var user = require("readline-sync")

var word = user.question("Digite uma palavra: ")
var x = 0
var result = ""
var alt = "A"

while (x < word.length) {
    if (word.charAt(x) == "a") {
        result = result + alt
    }else{
        result = result + word.charAt(x)
    }
    x++
}
console.log(result)