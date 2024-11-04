// Primeiramente importamos o express
const express = require('express')
//Criando uma instância do aplicativo express
const app = express()
//Aqui chamamos o método GET
app.get('/', function(request, response){
    // retorna uma resposta no formato JSON com uma mensagem de boas vindas
    return response.json({
        message: 'Olá Seja bem vindo a sua biblioteca virtual!'
    })
})
// Definindo uma rota para 'biblioteca' 
// quando uma solicitação GET é feita '/bibliota', a função a seguir é executada
app.get('/biblioteca', function(request,response){
    return response.json([
        '1-Harry Potter',
        '2-O senhor dos Anéis'
    ])
}) 
// definindo uma rota para criar um novo livro
// quando uma solicitação do tipo POST é feita para '/biblioteca'
app.post('/biblioteca', function(request,response){
    // retornar uma resposta com uma lista de livros, incluindo o novo livro
    return response.json([
        '1-Harry Potter',
        '2-O senhor dos Anéis',
        '3- Guerra e Paz'
    ])
})
//  definindo uma rota para atualizar um livro específico
// o ':id' é um parâmetro de rota
app.put('/projects/:id', function(request,response){
    // retorna uma resposta JSON com a lista de livros atualizada
    return response.json([
        '4-Fahrenheit 451',
        '2-O senhor dos Anéis',
        '3- Guerra e Paz'
    ])
})
// definindo uma rota para deletar um livro específico
app.delete('/projects/:id', function(request,response){
    // retorna uma resposta com a lista de livros após a exclusão de um deles
    return response.json([
        '2-O senhor dos Anéis',
        '3- Guerra e Paz',
    ])
})
// iniciando o servidor na porta 5000 
app.listen(5000, () => {
    console.log('servidor iniciado na porta 5000')
})