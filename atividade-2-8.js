var user = require("readline-sync")

var entrada = user.question("Digite uma palavra: ")
var s = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var p = entrada.charAt(0)

for (let n = 0; n < s.length; n++) {
    if(s[n] == p){
        console.log("A primeira letra é maiuscula")
        break
    }else{
        console.log("A primeira letra não é maiuscula")
        break
    }
}