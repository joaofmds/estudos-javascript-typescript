// const nome01 = 'João'
// const sobrenome01 = 'Felipe'
// const idade01 = 24

// const pessoa01= {
//     nome: 'João',
//     sobrenome: 'Felipe',
//     idade: 24
// }

// console.log(pessoa01.nome)

// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade
//     }
// }

// const pessoa01 = criaPessoa('João', 'Felipe', 24)
// const pessoa02 = criaPessoa('Maria', 'Santos', 12)
// const pessoa03 = criaPessoa('Thainara', 'Mendes', 23)

// console.log(pessoa01.nome)
// console.log(pessoa02.nome)
// console.log(pessoa03.nome)

const pessoa01 = {
    nome: 'João',
    sobrenome: 'Felipe',
    idade: 24,

    fala() {
        console.log(`A minha idade atual é: ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa01.fala()
pessoa01.incrementaIdade()
pessoa01.fala()