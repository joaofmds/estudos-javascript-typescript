
exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: 'João', logado: true}
    req.flash('info', 'Olá, mundo')
    req.flash('error', 'jdohopiruhipr')
    req.flash('success', 'Blaaaaaaaaaa')
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
    // const HomeModel = require('../models/HomeModel')
    
    // // HomeModel.create({
    // //     titulo: 'Um titulo de teste',
    // //     descricao: 'Uma descrição de teste'
    // // })
    // HomeModel.find()
    //     .then((dados) => console.log(dados))
    //     .catch(e => console.log(e))