const usuario = {
    id: 1,
    apelido: 'acarrara',
    nomeCompleto: {
        nome: 'Agostinho',
        sobrenome: 'Carrara'
    }
}

var {id, apelido,} = usuario
var {nome,} = usuario.nomeCompleto

console.log("Nome: ", nome);
console.log("Apelido: ", apelido)