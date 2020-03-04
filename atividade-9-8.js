var user = require("readline-sync")

function perfeito(n) {
    var soma = 1
    if(n==1 || n==2){
        return true
    }else{
        for(let x = 2; x < n; x++){
            if (n % x == 0) {
                soma = soma + x
            }
        }
        if (soma == n) {
            return true
        }else{
            return false
        }
    }
}

while(true){
    var num = user.questionInt("Digite um numero inteiro e positivo: ")
    if (num > 0) {
        var result = perfeito(num)
        if (result == true) {
            console.log("O numero "+num+" é perfeito.")
            break
        }else{
            console.log("O numero "+num+" não é perfeito.")
            break
        }
    }else{
        console.log("Numero invalido. Digite um numero inteiro positivo.")
    }
}