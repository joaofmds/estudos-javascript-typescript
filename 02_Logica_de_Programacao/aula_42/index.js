// try {
//     console.log('Abri um arquivo')
//     console.log('Manipulei um arquivo e gerou erro')
//     console.log('Fechei o arquivo')
// } catch(e) {
//     console.log('Tratando o erro')
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data)
    console.log(hora)
} catch(e) {

} finally {
    console.log('Tenha um bom dia')
}