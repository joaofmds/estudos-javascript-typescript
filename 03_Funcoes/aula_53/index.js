function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        },

        altura,
        peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('João', 'Souza', 1.71, 93)
const p2 = criaPessoa('Felipe', 'Mendes', 1.60, 45)
p2.nomeCompleto = 'João Felipe Mendes de Souza'

console.log(p1.nome)
console.log(p1.sobrenome)
// console.log(p1.fala('Falando sobre JS'))
// console.log(p1.nomeCompleto)
// console.log(p2.fala('Falando sobre JS'))
// console.log(p2.nomeCompleto)