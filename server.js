//Importando o módulo express
const express = require('express')
//Cria a aplicação express (nosso servidor)
const app = express()
//Definir a porta em que o servidor vai rodas
const porta = 5000

// Falar ao express par servir arquivos estáticos da pasta "public" (isso significa que qualquer arquivo da pasta "public" será acessível ao navegador)
app.use(express.static('public'))

//Inicia o servidor, dizendo para escutar na porta específicada
//Quando o servidor estiver rodando, ele executa a função callback e imprime a mesagem
app.listen(porta, () => {
    console.log(`Servidor rodando na porta : http://localhost:${porta}`)
})