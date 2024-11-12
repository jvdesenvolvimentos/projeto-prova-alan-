import { Router  } from "express";
import { conexao } from "./data/dbConnection";

const criacao = Router();

criacao.post("/api/cadastro", (req, res) => {
    const {nome, email, senha, rsenha, cpf} = req.body;

    if(!nome || !email || !senha || !cpf){
        return res.json(
            {
                Erro: "Preenchar todos os dados" 
            }
        )
    }

    conexao.query(`INSERT INTO usuarios (nome, email, senha, cpf) VALUES ('${nome}', '${email}', '${senha}', '${cpf}')`, (err, result)=>{
        if(err){
            return res.json(
                {
                    Erro: "Error na inserção de dados, "+ err.message 
                }
            )
        }
        res.json({
            Sucesso: "Usuario cadastrando com sucesso"
        })
    })

})

export { criacao };