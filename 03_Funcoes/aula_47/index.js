// function funcao(a, b, c) {
//     let total = 0
//     console.log(arguments)
//     for (let argumento of arguments) {
//         total += argumento
//     }

//     console.log(total, a, b, c)
// }

// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9)

// function funcao(a, b, c, e, f) {
//     console.log(a, b, c, e, f)
// }

// funcao(1, 2, 3)


// function funcao(a, b=2, c=4) {
//     // b = b || 0
//     console.log(a + b + c)
// }

// funcao(2, null, 20)

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3)
// }
 
// // let obj = {nome: 'João', sobrenome: 'Mendes', idade: 24}
// funcao(['João', 'Mendes', 24])

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }

    console.log(acumulador)
}


conta('/', 1, 20, 30, 40, 50)










