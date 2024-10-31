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

// Importa o módulo 'http' do Node.js, que permite criar um servidor HTTP.
const http = require('http');

// Cria um servidor HTTP que escuta requisições na porta 3000.
const server = http.createServer((req, res) => {
  // Extrai a URL e o método da requisição.
  const url = req.url; // A URL requisitada.
  const method = req.method; // O método HTTP (GET ou POST).

  // Verifica se a URL começa com '/dados', que é o endpoint que vamos usar.
  if (url.startsWith('/dados')) {
    // Se o método for GET, trata a requisição para buscar dados.
    if (method === 'GET') {
      // Obtém os parâmetros da URL (query parameters).
      const queryParams = new URLSearchParams(url.split('?')[1]);
      const nome = queryParams.get('nome'); // Obtém o valor do parâmetro 'nome'.
      const idade = queryParams.get('idade'); // Obtém o valor do parâmetro 'idade'.

      // Prepara a resposta com os dados recebidos.
      const responseData = {
        mensagem: `Olá, ${nome}! Você tem ${idade} anos.`,
      };

      // Define o cabeçalho da resposta como JSON.
      res.setHeader('Content-Type', 'application/json');

      // Envia a resposta com o status 200 (OK) e os dados em JSON.
      res.statusCode = 200;
      res.end(JSON.stringify(responseData));
    }
    // Se o método for POST, trata a requisição para enviar dados.
    else if (method === 'POST') {
      let body = ''; // Variável para armazenar o corpo da requisição.

      // Escuta os dados que são enviados no corpo da requisição.
      req.on('data', chunk => {
        body += chunk.toString(); // Converte o chunk para string e adiciona ao corpo.
      });

      // Quando todos os dados forem recebidos, processa a requisição.
      req.on('end', () => {
        // Converte o corpo para um objeto JavaScript.
        const dados = JSON.parse(body);
        
        const nome = dados.nome; // Obtém o nome do corpo da requisição.
        const idade = dados.idade; // Obtém a idade do corpo da requisição.

        // Prepara a resposta com os dados recebidos.
        const responseData = {
          mensagem: `Usuário ${nome} com idade ${idade} foi criado com sucesso!`,
        };

        // Define o cabeçalho da resposta como JSON.
        res.setHeader('Content-Type', 'application/json');

        // Envia a resposta com o status 201 (Criado) e os dados em JSON.
        res.statusCode = 201;
        res.end(JSON.stringify(responseData));
      });
    } else {
      // Se o método não for GET nem POST, retorna um erro 405 (Método Não Permitido).
      res.statusCode = 405; // Método não permitido
      res.end('Método não permitido');
    }
  } else {
    // Se a URL não for '/dados', retorna um erro 404 (Não Encontrado).
    res.statusCode = 404; // URL não encontrada
    res.end('Rota não encontrada');
  }
});

// O servidor escuta na porta 3000.
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000...');
});

