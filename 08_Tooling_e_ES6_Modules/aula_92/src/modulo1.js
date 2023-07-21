const nome = 'João'
const sobrenome = 'Souza'
const idade = 24
const cpf = '12345678910'

function soma(x, y) {
    return x + y
}

export {nome as default, sobrenome, idade, soma}

// export const nome = 'João'
// export const sobrenome = 'Souza'
// export const idade = 24
// const cpf = '12345678910'

// export default function soma(x, y) {
//     return x + y
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }
// }


// // export {nome as nome2, sobrenome, idade, soma}