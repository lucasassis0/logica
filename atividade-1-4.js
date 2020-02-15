var user = require("readline-sync");

var m = user.question("Numero de macas: ");

if(m > 12){
    var p = m*0.25;
    console.log("O valor é de R$"+ p +" reais.");
}else{
    var p = m*0.3;
    console.log("O valor é de R$"+ p +" reais.");
}