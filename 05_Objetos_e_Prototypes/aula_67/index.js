// // const pessoa = {
// //     nome: 'Luiz',
// //     sobrenome: 'Otávio'
// // }

// // const chave = 'nome'
// // console.log(pessoa[chave])

// const pessoa1 = new Object()
// pessoa1.nome = 'João'
// pessoa1.sobrenome = 'Souza'
// pessoa1.idade = 30
// pessoa1.falarNome = function() {
//     console.log(`Meu nome é ${this.nome}`)
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade 
// } 


// for (let chave in pessoa1) {
//     console.log(chave)
// }


// // pessoa1.falarNome()
// // console.log(pessoa1.getDataNascimento())
// // // delete pessoa1.nome
// // console.log(pessoa1.nome, pessoa1.sobrenome)


// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('João', 'Souza')
// console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
    Object.freeze(this)
}

const p1 = new Pessoa('João', 'Souza')
p1.nome = 'Maria'

console.log(p1)






