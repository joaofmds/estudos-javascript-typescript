const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numFilter = num.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((i, valor) => i += valor, 0)

console.log(numFilter)