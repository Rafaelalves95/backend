// importando o express 
const express =require('express')

// importando o método 'uuidv4' da biblioteca 'uuid', para gerar um identificador para a app
const {v4:uuidv4 } = require('uuid')
// criando uma instância do aplicativo express
const app = express()

// configurando o servidor para aceitar requisições com dados JSON no corpo
app.use(express.json())
// Array onde armazenaremos temporariamente os projetos criados
const projects = ['pc funcionem']
// Middleware que registra as rotas e métodos das requisições no console 

function logRoutes(request,response, next){
    // extraindo o método e a URL da requisição
    const {method, url} = request 
    // formatando uma string com o método e a URL
    const route = `[${method.toUpperCase()}] ${url}`
    // exibindo a string no console
    console.log(route)
    // executando o próximo middleware ou rota
    return next()
}

// Habilitando o uso do middleware de log de rotas em todas as requisições 


// definindo uma rota para o endpoint 'projects'
// quando uma solicitação GET é feita '/projects', a função a seguir é executada
app.get('/projects', function(request,response){
    return response.json(projects)
}) 
// definindo uma rota para criar um novo projeto
// quando uma solicitação do tipo POST é feita para '/projects'.
app.post('/projects', function(request, response){
    const{nome, responsável} = request.body
// Extraindo ou colocando um nome no projeto e um responsável no corpo da requisição
const project ={
    id: uuidv4(),
    nome,
    responsável
} 
// Adicionando o novo projeto na array de projetos
projects.push(project)
// Retornando o projeto criado com status 201 (criado com sucesso)
return response.status(201).json(project)
    

})
// // definindo uma rota para atualizar um projeto específico 
// o ':id' é um parâmetro de rota
app.put('/projects/:id', function(request, response){
    //Extraindo o 'id' dos parâmetros da URL
    const[id] = request.params
    // Extrai 'nome' e 'responsável' do corpo da requisição
    const {nome, responsável} = request.body

    // Encontrando o índice do projeto no array que tem id igual ao passado
    const projectIndex = projects.findIndex (p => p.id === id)
})
// Verificando se o projeto existe. Se não, retorna um erro 404
if(projectIndex < 0){
    return express.response.status(404).json({error: "Projeto não encontrado!"})
}
// Verificando se 'nome' e 'responsável' foram informados. Se não, retorna o erro 400
if(!nome || !responsável){
    return express.response.status(400).json({ error: "Nome e responsável precisam ser fornecidos"})
}
// Criando o novo objeto do projeto com os dados atualizados :)
const project = {
    id,
    nome,
    responsável
}

// definindo uma rota para deletar um projeto específico
app.delete('/projects/:id', function(request, response){
    // retorna uma resposta com a lista de projetos após a exclusão de um deles
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})
// iniciando o servidor na porta 9093 (para orientar no terminal que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(9093, () => {
    console.log('Servidor iniciado na porta 9093 🏆')
})