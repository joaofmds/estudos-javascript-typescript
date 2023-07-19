function retornaFuncao(nome) {
    return () => {
        return nome
    }
}

const funcao1 = retornaFuncao('João')
const funcao2 = retornaFuncao('Felipe')

console.log(funcao1(), funcao2())