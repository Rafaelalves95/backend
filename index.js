/* Como a gente vai criar uma API que se comunica através dos métodos HTTPS, vamos importar o nosso http (pacote que vem com o Node | Nativa )
*/
const { create } = require('domain');
const http = require('http')
/* Criando um servidor que vai receber uma requisição e dar uma resposta. então iniciamos uma arrow function. */
http.createServer((Request,Response) => {
    /* Aqui vamos colocar a porta que vai escutar e também é onde ele vai responder, |response.end() finalizar, (não tem mais nada a fazer)| */
    Response.write('hello world!')
    Response.end()
}).listen(9090)