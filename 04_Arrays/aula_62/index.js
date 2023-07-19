const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => valor > 10)

// console.log(numerosFiltrados)




const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 43},
    {nome: 'João', idade: 8},
    {nome: 'Felipe', idade: 54},
    {nome: 'Souza', idade: 37}
]


const nomeCincoLetrasOuMais = pessoas.filter(valor => valor['nome'].length >= 5)
console.log(nomeCincoLetrasOuMais)

const cinquentaMais = pessoas.filter(valor => valor['idade'] >= 50)
console.log(cinquentaMais)

const nomeTerminaComA = pessoas.filter(valor => valor['nome'].slice(-1) === 'a')
console.log(nomeTerminaComA)