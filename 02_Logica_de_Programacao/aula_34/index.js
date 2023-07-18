const itens = ['João', true, 12, 10.01, 'Felipe']

for (let item of itens) {
    console.log(item)
}

itens.forEach((valor, indice) => {
    console.log(indice, valor)
});