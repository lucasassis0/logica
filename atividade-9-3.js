var user = require("readline-sync")

function idadeDias(anos, meses, dias) {
    return (anos*365)+(meses*30)+dias
}

var anos = user.questionInt("Quantos anos de vida: ")
var meses = user.questionInt("Quantos meses: ")
var dias = user.questionInt("Quantos dias: ")

console.log("Tempo de vida em dias: "+idadeDias(anos,meses,dias))