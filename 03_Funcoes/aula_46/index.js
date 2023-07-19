falaOi()

function falaOi() {
    console.log('Oi')
}


const souUmDado = function() {
    console.log('Sou um dado')
}

souUmDado()

function executaFuncao(funcao) {
    console.log('Vou executar a sua função abaixo.')
    funcao()
}

executaFuncao(souUmDado)

const arrow = () => {
    console.log('Sou uma arrow function.')
}

arrow()

setInterval(() => {
    console.log('Intervalo')
}, 1000)

const obj = {
    falar() {
        console.log('Estou falando...')
    }
}

obj.falar()