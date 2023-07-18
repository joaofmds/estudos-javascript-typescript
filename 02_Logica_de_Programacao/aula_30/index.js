const pessoa = {
    nome: 'João',
    sobrenome: 'Souza',
    idade: 24,
    endereco: {
        rua: 'Monte Sião IV',
        apt: 201,
        bloco: 'P'
    }
}

const {nome, ...resto} = pessoa

console.log(resto)