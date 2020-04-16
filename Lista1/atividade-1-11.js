var user = require("readline-sync")

var n1 = user.questionFloat("Digite a primeira nota: ")
var n2 = user.questionFloat("Digite a segunda nota: ")
var n3 = user.questionFloat("Digite a terceira nota: ")

var med = ((n1 + n2 + n3)/3)

if(med >= 7){
    console.log("Aluno APROVADO com nota "+med.toFixed(1))
}else{
    console.log("Aluno REPROVADO com nota "+med.toFixed(1))
}