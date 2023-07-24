
// const falaNome = () => (nome, sobrenome) 

// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome

// // console.log(module.exports)
const nome = 'João'
const sobrenome = 'Souza'

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

module.exports = {
    nome, sobrenome, Pessoa
}

// exports.Pessoa = Pessoa