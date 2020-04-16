function multiplica(...valor) {
    var resultado = 1
    if (valor.length == 1) {
        return valor[0] * 1
    }else{
        for (let i = 0; i < valor.length; i++) {
            resultado = resultado * valor[i]
        }
    }
    return resultado
}

console.log(multiplica(2))