var user = require("readline-sync")

var nome = user.question("NOME: ")
var sexo = user.question("SEXO (F/M): ")
var eC = user.question("ESTADO CIVIL: ")

if(sexo == 'f'){
    if(eC == 'casada'){
        var tempo = user.question("QUANTO TEMPO DE CASADA (EM ANOS): ")

        console.log("A "+nome+" esta casada ha "+tempo+" anos.")
    }
}