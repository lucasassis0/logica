var user = require('readline-sync');

var nasc = user.question("Insira seu ano de nascimento: ");
var ano = user.question("Em que ano estamos: ")
if((ano-nasc)>=16){
    console.log("Você já pode votar!")
}else if((ano-nasc)>=18){
    console.log("Você deve votar!!")
}else{
    console.log("Você ainda não pode votar.")
}