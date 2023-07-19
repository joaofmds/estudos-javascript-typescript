// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const total = numeros.reduce((acumulador, valor) =>  acumulador += valor, 0)
// console.log(total)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 43},
    {nome: 'João', idade: 8},
    {nome: 'Felipe', idade: 54},
    {nome: 'Souza', idade: 37}
]

const maisVelha = pessoas.reduce((acumulador, valor) => {return acumulador.idade > valor.idade ? acumulador : valor})

console.log(maisVelha)