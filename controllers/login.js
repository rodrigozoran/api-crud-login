const Login = require('../models/login')

module.exports = app => {
    app.get('/login', (req, res) => {
        Login.listar(res)
    })

    app.get('/login/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Login.buscaPorId(id, res)
    })


    app.post('/login', (req, res) => {
        const login = req.body

        Login.adiciona(login, res)

    })

    app.patch('/login/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Login.alterar(id, valores, res)
    })

    app.delete('/login/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Login.deletar(id, res)
    })


}