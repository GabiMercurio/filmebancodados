const express = require("express")
const mysql = require('mysql2/promise')

const conexao = mysql.createPool({
    database:"filmes",
    host: "localhost",
    password: "senai",
    user:"root"
})

const App = express()

App.listen(3000)
App.get("/filmes", async (req,res) => {
    const filme = req.query.filme
 
    const dadosbanco =  await conexao.query("select * from filmes where titulo like ?", ['%'[filme]])
    res.json(dadosbanco[0])

})