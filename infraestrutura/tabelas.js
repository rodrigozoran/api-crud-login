class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarCadastro()
    }

    criarCadastro(){
        const sql = 'CREATE TABLE IF NOT EXISTS Cadastros (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, cpf VARCHAR(11), cnpj VARCHAR(14), data datetime NOT NULL, email VARCHAR(70) NOT NULL, telefone VARCHAR(12) NOT NULL, senha VARCHAR(20), PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela de CADASTROS criada com sucesso.')
            }
        })

        
    }
}

module.exports = new Tabelas