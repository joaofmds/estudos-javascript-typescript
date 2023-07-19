const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const numerosAoDobro = numeros.map(numeroInicial => numeroInicial * 2)
// console.log(numerosAoDobro)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 43},
    {nome: 'João', idade: 8},
    {nome: 'Felipe', idade: 54},
    {nome: 'Souza', idade: 37}
]

// const nomeString = pessoas.map(obj => obj.nome)
// console.log(nomeString)

const removeNome = pessoas.map(obj => {
    delete obj.nome
    return obj
})
console.log(removeNome)

const adicionaID = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})
console.log(adicionaID)