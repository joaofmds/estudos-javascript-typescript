function Pessoa(nome, sobrenome) {
    const ID = 123456
    const metodoInterno = () => {
        
    }

    this.nome = nome,
    this.sobrenome = sobrenome,

    this.metodo = () => {
        console.log(this.nome +': Sou um método')
    }
}

const p1 = new Pessoa('João', 'Souza')

console.log(p1)
p1.metodo()