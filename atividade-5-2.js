var user = require("readline-sync")

var ni = user.questionInt("Digite o numero inicial: ")
var nf = user.questionInt("Digite o numero final: ")

while(true){
    if (ni>nf) {
        console.log("O numero inicial deve ser menor que o final.")
        ni = user.questionInt("Digite o numero inicial: ")
        nf = user.questionInt("Digite o numero final: ")
    }else{
        break
    }
}
console.log("Contagem: ")
for (ni; ni <= nf; ni++) {
    console.log(ni)
}
console.log("Final da contagem.")