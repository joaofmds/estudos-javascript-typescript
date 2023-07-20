// const objA = {
//     chaveA: 'A'
// }
// const objB = {
//     chaveB: 'B'
// }

// const objC = new Object()
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objB.chaveA)
// console.log(objC.chaveB)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco


}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
p1.desconto(100)


const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})
// p3.preco = 113
p3.aumento(10)
