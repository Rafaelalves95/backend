// Importando o Express
const express = require('express')
//Criando uma instância do aplicativo express,
const app = express()

// Definindo uma rota para endpoint raiz ('/')
// Quando uma solicitação GET é feita para '/', essa função é executada
app.get('/', function(request, response){
    // retorna uma resposta no formato JSON com uma mensagem de boas vindas
    return response.json({
        message: 'Olá turma 5938!'
    })
})
// Definindo uma rota para o endpoint 'projects' 
// quando uma solicitação GET é feita '/projects', a função a seguir é executada
app.get('/projects', function(request,response){
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
}) 
// definindo uma rota para criar um novo projeto
// quando uma solicitação do tipo POST é feita para '/projects'
app.post('/projects', function(request,response){
    // retornar uma resposta com uma lista de projetos, incluindo o novo projeto
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})
//  definindo uma rota para atualizar um projeto específico
// o ':id' é um parâmetro de rota
app.put('/projects/:id', function(request,response){
    // retorna uma resposta JSON com a lista de projetos atualizada
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})
// definindo uma rota para deletar um projeto específico
app.delete('/projects/:id', function(request,response){
    // retorna uma resposta com a lista de projetos após a exclusão de um deles
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ])
})
// iniciando o servidor na porta 9093 (para orientar no terminal que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(9093, () => {
    console.log('servidor iniciado na porta 9093 🏆')
})