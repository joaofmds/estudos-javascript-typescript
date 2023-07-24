exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome"><br>
            Telefone: <input type="text" name="telefone"><br>
            <button>Enviar</button>
        </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST')
}