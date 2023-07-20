function Pessoa(nome, sobrenome) {
    this.nome,
    this.sobrenome,
    this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

const pessoa1 = new Pessoa('João', 'Souza')
const data = new Date()

console.dir(pessoa1)
console.dir(data)