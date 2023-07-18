function monstraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(() => {
    console.log(monstraHora())
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 10000)


// console.log(monstraHora())