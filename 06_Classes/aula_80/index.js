class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return
        }

        this.desligado = true
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome)
        this.cor = cor
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWiFi) {
        super(nome)
        this.temWiFi = temWiFi
    }

    ligar() {
        console.log('Método alterado')
    }
}

const s1 = new Smartphone('iPhone', 'Preto')
console.log(s1)

const t1 = new Tablet('iPad', true)
console.log(t1.ligado)

// const d1 = new DispositivoEletronico('Smartphone')
// d1.ligar()
// d1.desligar()
// console.log(d1)