// const HomeModel = require('../models/HomeModel')

// // HomeModel.create({
// //     titulo: 'Um titulo de teste',
// //     descricao: 'Uma descrição de teste'
// // })
// HomeModel.find()
//     .then((dados) => console.log(dados))
//     .catch(e => console.log(e))
    
exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}