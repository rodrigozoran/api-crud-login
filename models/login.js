const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Login {
    adiciona(login, res){
        //const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(login.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const dataCadastro = {...login, data}

        const sql = 'INSERT INTO Cadastros SET ?'

        conexao.query(sql, dataCadastro, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(login)
            }
        })
    }

    listar(res){
        const sql = 'SELECT * FROM Cadastros'

        conexao.query(sql, null, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Cadastros WHERE id=${id}`

        conexao.query(sql, null, (erro, resultados) => {
            const login = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(login)
            }
        })
    }

    alterar(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Cadastros SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    deletar(id, res){
        const sql = 'DELETE FROM Cadastros WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}
module.exports = new Login