let numero = prompt('Qual é o seu número?')

if (numero != Number.isNaN(numero)) {
    numero = Number(numero)

    const numeroTitulo = document.getElementById('numero-titulo')
    const texto = document.getElementById('texto')

    numeroTitulo.innerHTML = numero
    texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`
    texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
    texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
    texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
    texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
    texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
} else {
    prompt('Qual é o seu número?')
}


// const numero = Number(numero_str)

// document.body.innerHTML += `<strong>Seu número é ${numero}</strong> <br>`
// document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5} <br>`
// document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br>`
// document.body.innerHTML += `É NaN: ${Number.isNaN(numero)} <br>`
// document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br>`
// document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} <br>`
// document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br>`