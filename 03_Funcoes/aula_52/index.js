// function texto() {
//     console.log('Texto 1')
// }

// texto()

((idade, peso, altura) => {
    const sobrenome = 'Souza'
    function falaOi(nome) {
        return nome + ' ' + sobrenome 
    }

    function falaNome() {
        console.log(falaOi())
    }

    falaNome()
    
})(30, 80, 1.80)

const nome = 'Felipe'