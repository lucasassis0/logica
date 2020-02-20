var user = require("readline-sync");

var m = user.question("Numero de macas: ");

if(m > 12){
    console.log("O valor é de R$"+(m*0.25)+" reais.")
}else{
    console.log("O valor é de R$"+(m*0.3)+" reais.");
}