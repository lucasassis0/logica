var user = require("readline-sync")

function primo(n) {
    var p = 0
    
    for (let x = 2; x < n; x++) {
        if (n % x == 0){
            p++
        }
    }

    if (p == 0) {
        return true
    }else{
        return false
    }
}

while (true) {
    var num = user.questionInt("Insira um numero inteiro e positivo: ")
    if (num>0) {
        if(primo(num)){
            console.log("O numero "+num+" é primo.")
            break
        }else{
            console.log("O numero "+num+" não é primo.")
            break
        }
    }else{
        console.log("Favor inserir um numero inteiro e positivo.")
    }
}
