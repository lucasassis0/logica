var user = require("readline-sync")

var num = user.question("Digite um numero: ")

if(num >100 && num < 200){
    console.log("O numero digitado esta entre 100 e 200.")
}else{
    console.log("O numero digitado nao esta entre 100 e 200.")
}