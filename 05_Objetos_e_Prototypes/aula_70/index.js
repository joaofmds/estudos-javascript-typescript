// const produto = {nome: 'Caneca', preco: 1.8}
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// })
// // console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// produto.nome = 'Outra coisa'
// delete produto.nome
// console.log(produto)

const produto = {nome: 'Caneca', preco: 1.8}

// console.log(Object.values(produto))
// console.log(Object.entries(produto))

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}










// Object.freeze(produto)
// produto.nome = 'Cadeira'

// const caneca = {nome: produto.nome, preco: produto.preco}

// console.log(Object.keys(produto))
// const caneca = Object.assign({}, produto, {material: 'porcelana'})

// const outraCoisa = {
//     ...produto,
//     material: 'porcelana'
// }

// produto.nome = 'Mesa'

// console.log(produto)
// console.log(caneca)