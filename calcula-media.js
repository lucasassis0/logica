
function calculaMedia(arr) {
    var soma = 0
    var media = 0
    
    for (let x = 0; x < arr.length; x++) {
        soma += arr[x]
    }
    
    media = soma/(arr.length)
    
    return media
}

function calculaMediaIdadeAlunos(arr) {
    var soma = 0
    var media = 0

    for (let x = 0; x < arr.length; x++) {
        soma += arr[x].idade
    }

    media = soma/(arr.length)
    
    return media
}

module.exports = {calculaMedia}
module.exports = {calculaMediaIdadeAlunos}