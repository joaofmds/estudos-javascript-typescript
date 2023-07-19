// function soma(a, b) {
//     return a + b
// }

// document.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red'
// })

// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }

// const p1 = criaPessoa('João', 'Souza')

// const p2 = {
//     nome: 'Felipe', 
//     sobrenome: 'Souza'
// }

// console.log(typeof p1)
// console.log(typeof p2)

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco = ' ' + resto
//     }
//     return falaResto
// }

// const olaMundo = falaFrase('Olá, mundo!')

// console.log(olaMundo('Como vai?'))

// function duplica(n) {
//     return n * 2
// }

// function triplica(n) {
//     return n * 3
// }

// function quadriplica(n) {
//     return n * 4
// }

// console.log(duplica(2))
// console.log(triplica(2))
// console.log(quadriplica(2))


function criaMuliplicador(multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMuliplicador(2)
const triplica = criaMuliplicador(3)
const quadriplica = criaMuliplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))











