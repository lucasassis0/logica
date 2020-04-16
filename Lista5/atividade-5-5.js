var user = require("readline-sync")
var fatorial = 1
while (true) {
    var n = user.questionInt("Digite um numero para saber o fatorial dele: ")
    if (n > 0) {
        var aux = n
        for (n; n > 0; n--) {
            fatorial = fatorial * n  
        }
        console.log("O fatorial de "+ aux + ": "+ fatorial)
    }else if (n == 0) {
        console.log("O fatorial de 0: 1")
    }else{
        console.log("O numero digitado é negativo.")
    }

    var resp = user.question("Digite N para fechar o programa ou qualquer tecla para continuar: ")
    if (resp == "N") {
        console.log("Fechando o programa.")
        break
    }
}