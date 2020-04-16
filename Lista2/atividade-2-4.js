var user = require("readline-sync")

var salario = user.questionFloat("Salario: ")
var valorEmp = user.questionFloat("Digite o valor do emprestimo: ")
var margem = salario*0.3
var parcela = valorEmp/24 //os empréstimos serão somente com 24 parcelas

if(salario > 0) {
    if(valorEmp > 0){
        if(parcela <= margem){
            console.log("Emprestimo concedido!!")
            console.log("Valor do emprestimo: "+valorEmp)
            console.log("24 parcelas de R$"+parcela.toFixed(2))
        }else{
            console.log("Emprestimo negado devido a curta margem consignavel.")
        }
    }else{
        console.log("O valor de emprestimo deve ser maior que zero.")
    }
}else{
    console.log("O valor do salário deve ser maior que zero.")
}