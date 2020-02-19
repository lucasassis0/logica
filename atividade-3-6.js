var user = require("readline-sync")

var resp = 0

while(resp != 1){
    resp = user.questionInt("Insira 0 para sair ou qualquer outra tecla para o continuar. ")
}