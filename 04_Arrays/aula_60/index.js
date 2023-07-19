const nomes = ['Maria', 'João', 'Eduardo', 'Ana', 'Júlia']

// // pop
// const removidos = nomes.slice(-1, 1)

// // shift
// const removidos = nomes.slice(0, 1)

// // push
// const removidos = nomes.splice(nomes.length, 0, 'Joana')

// unshift
const removidos = nomes.splice(0, 0, 'Joana')

console.log(nomes)


// const removidos = nomes.splice(-2, Number.MAX_VALUE, 'Joana')
// console.log(nomes)

