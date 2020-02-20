var user = require("readline-sync")

var n1 = user.questionInt("Insira um numero de 1 a 100: ")
var n2 = user.questionInt("Insira outro numero de 1 a 100: ")
var aux = null

if(n1 > n2){
    aux = n1
    n1 = n2
    n2 = aux
}

if(n1 != n2){
    for (let x=n1; x <= n2; x++) {
        if(x%7==0){
            if(x%5==0){
                console.log(x+" Ping Pong")
            }else{
            console.log(x+" Ping")
            }
        }else if(x%5==0){
            console.log(x+" Pong")
        }else{
            console.log(x)
        }
    }
}else if(n1 == n2){
    console.log("Os numeros sao iguais.")
}