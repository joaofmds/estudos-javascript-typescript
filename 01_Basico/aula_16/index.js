// let nome = 'João'
// nome[0] = 'R'
// console.log(nome[0], nome)

// let a = 'A'
// let b = a
// console.log(a, b)

// a = 'Outra coisa'
// console.log(a, b)

// let a = [1, 2, 3]
// let b = [...a]
// let c = b
// console.log(a, b)

// a.push(4)
// console.log(a, b)

// b.pop()
// console.log(a, b, c)

const a = {
    nome: 'João',
    sobrenome: 'Felipe'
}

const b = {...a}
console.log(b)

a.nome = 'Lucas'
console.log(b)