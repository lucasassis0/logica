var user = require("readline-sync")

function tabuada(n) {
    var x = 1
    while (x <= n) {
        if(n > 0){
            console.log(n+" x "+x+" = "+(n*x))
            x++
        }
    }
    return ""
}

while (true) {
    var num = user.questionInt("Digite o numero da tabuada desejada: ")
    if (num>0) {
        console.log(tabuada(num))
        break
    }else{
        console.log("Numero invalido. Digite um numero acima de 0.")
    }
}