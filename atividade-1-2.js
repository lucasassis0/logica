var user = require('readline-sync');

var n = user.question("Digite um numero: ");

if(n%2===1){
    console.log("O número "+ n +" é ímpar.")
}else{
    console.log("O número "+ n +" é par.")
}