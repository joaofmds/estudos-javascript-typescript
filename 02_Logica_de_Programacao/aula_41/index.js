// try {
//     console.log(naoExisto)
// } catch(e) {
//     console.log('naoExisto não existe.')
//     console.log(e)
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números')
    }
    return x + y
}
try {
    console.log(soma(3, 'a'))
} catch(err) {
    console.log(err)
}