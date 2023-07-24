exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Valor da variável'
    next()
}

exports.outroMiddleware = (req, res, next) => {
    next()
}