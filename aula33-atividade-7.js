function seiLa(...valor) {
    var x = 0
    
    for (let i = 0; i < valor.length; i++) {
        x++
    }

    return x
}

console.log('numero de parametros passados: ', seiLa('eu', 'sei', 'lá'));