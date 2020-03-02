var user = require("readline-sync")

var entrada = user.question("Digite uma palavra: ")
var s = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var p = entrada.charAt(0)
var ma = 0

for (let n = 0; n < s.length; n++) {
    if(s[n] == p){
        ma++
    }
}

if(ma > 0){
    console.log("A primeira letra é maiuscula")
}else{
    console.log("A primeira letra é minuscula")
}