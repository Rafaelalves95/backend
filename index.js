/* Como a gente vai criar uma API que se comunica através dos métodos HTTPS, vamos importar o nosso http (pacote que vem com o Node | Nativa )
*/ 
//const { create } = require('domain');
//const http = require('http')
/* Criando um servidor que vai receber uma requisição e dar uma resposta. então iniciamos uma arrow function. */
//http.createServer((Request,Response) => {
     /*Aqui vamos colocar a porta que vai escutar e também é onde ele vai responder, |response.end() finalizar, (não tem mais nada a fazer)| */
    //Response.write('hello world!')
    //Response.end()
//}).listen(9090)

//----------------------------EXEMPLO2:-------------------------------------------------

//Importando o módulo 'http' do Node.JS, que permite criar um servidor HTTPS.
const http = require('http')
//Criando um servidor que escuta as requisições na porta 9090
const server = http.createServer((req,res)=>{
    // extraindo a URL e o método de requisição
    const url = req.url //URL requisitada
    const method = req.method // o método HTTP(GET | POST)

    //Verificando se a URL começa '/dados', endpoint que vamos usar
    if(url.startsWith('/dados')){
        // se o método for GET, trate a requisição para buscar dados
        if(method === GET){
            // obtendo os parâmetros da URL (query parameters)
            const queryParams = new URLSearchParams(url.split('?')[1])
            const nome = queryParams.get('nome') // obtém o valor do parâmetro 'nome'
            const idade = queryParams.get('idade') // obtém o valor do parâmetro 'idade'

        //Preparando a resposta com os dados recebidos
        const responseData = {
            mensagem: `Olá, ${nome}! Você tem ${idade} anos.`
        }
        //definindo o cabeçalho da resposta como JSON
        res.setHeader('content-Type','application/json')
        // envia resposta com o status
        res.statusCode = 200
        res.end(JSON.stringify(responseData))
        }
    }
})

