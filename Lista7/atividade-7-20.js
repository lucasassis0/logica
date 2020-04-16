var user = require("readline-sync") //INCOMPLETO

var letter= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var word = user.question("Digite uma palavra: ")

console.log("Escolha: ")
console.log("A. Criptografar")
var ans = user.question("B. Descriptografar: ")

var wd = word.toUpperCase()
var res = ''

if (ans == "A") {
    for (let x = 0; x < wd.length; x++) {
        for (let y = 0; y < letter.length; y++) {
            if (wd.charAt[x] == letter[y] && y == (letter.length-1)) {
                res = res + 'C'
            }else if(wd.charAt[x] == letter[y] && y == (letter.length-2)){
                res = res + 'B'
            }else if(wd.charAt[x] == letter[y] && y == (letter.length-3)){
                res = res + 'A'
            }else if (wd.charAt[x] == letter[y]) {
                res = res + letter[y]
            }
        }
    }
    console.log(res)
}else if(ans == "B"){
    for (let x = 0; x < wd.length; x++) {
        for (let y = 0; y < letter.length; y++) {
            if (wd.charAt[x] == letter[y] && y == 2) {
                res = res + 'Z'
            }else if(wd.charAt[x] == letter[y] && y == 1){
                res = res + 'Y'
            }else if(wd.charAt[x] == letter[y] && y == 0){
                res = res + 'X'
            }else if (wd.charAt[x] == letter[y]) {
                res = res + letter[y]
            }
        }
    }
    console.log(res)
}