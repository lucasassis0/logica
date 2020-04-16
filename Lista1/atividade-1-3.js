var user = require('readline-sync');

var pwd = user.question("Digite a senha: ");

if(pwd == 1234){
    console.log("ACESSO PERMITIDO");
}else{
    console.log("ACESSO NEGADO");
}