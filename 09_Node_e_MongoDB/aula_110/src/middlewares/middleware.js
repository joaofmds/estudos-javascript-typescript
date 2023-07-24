exports.middlewareGlobal = (req, res, next) => {
    
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Baby', 'Children')
        console.log()
        console.log(`${req.body.cliente} foi postado`)
        console.log()
    }
    next()
}