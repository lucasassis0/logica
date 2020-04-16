var user = require("readline-sync")
var x = 1
while (x == 1) {
    
    console.log("A - Fechar o programa")
    console.log("B - Somar")
    var esc = user.question("Escolha uma opcao(RESPONDA COM A LETRA MAIUSCULA): ")
    if (esc == 'A') {
        console.log("Fechando o programa")
        x=0
    }else if(esc == 'B'){
        var n1 = user.questionInt("Insira o primeiro numero: ")
        var n2 = user.questionInt("Insira o segundo numero: ")
        
        console.log("RESPOSTA: "+(n1 + n2))
        esc = user.question("Deseja realizar nova soma?(S/N)")
        if (esc != 'S' || esc != 'N') {
            console.log("Opcao invalida. Favor escolher apenas entre S ou N.")
        }
        if (esc == 'N') {
            break
        }
    }else if(esc != 'A' || esc != 'B'){
        console.log("Opcao invalida. Favor escolher apenas entre A ou B.")
    }
}