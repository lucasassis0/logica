var user = require("readline-sync")

var ddi = user.questionInt("Digite o DDI: ")

if(ddi == 1){
    console.log("Estado Unidos")
}else if(ddi == 35){
    console.log("Portugal")
}else if(ddi == 49){
    console.log("Alemanha")
}else if(ddi == 54){
    console.log("Argentina")
}else if(ddi == 55){
    console.log("Brasil")
}else{
    console.log("O sistema está sendo atualizado. Caso o DDI digitado não estiver sendo representado não se preocupe, estamos trabalhando nisso...")
}