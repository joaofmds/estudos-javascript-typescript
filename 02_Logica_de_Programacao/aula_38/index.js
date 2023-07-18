function retornaMaior(num1, num2) {
    numero = num1 > num2 ? num1 : num2
    return numero
}

const meuNumero = retornaMaior(13, 16)
console.log(meuNumero)