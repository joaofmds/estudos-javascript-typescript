// // const falaNome = require('./mod1').falaNome
// // console.log(falaNome())

// const {nome, sobrenome, falaNome} = require('./mod1')

// console.log(falaNome())

const path = require('path')
const axios = require('axios')
const {Pessoa} = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))

// const p1 = new Pessoa('João') 
// console.log(p1)