// classe base (pai) ItemBiblioteca
class ItemBiblioteca{
    // Atributo que representa o título do item
    titulo: string;
    // atributo autor
    autor: string;
// construir da classe base (inicializar todos os atributos comuns)
constructor(titulo:string, autor:string){
    this.titulo = titulo;
    this.autor = autor;   
}
// Método que exibe as informações gerais do item biblioteca
exibirInformacoes(): string{
    return `Título: ${this.titulo}, Autor: ${this.autor}`
}
}
// Classe que representa um livro, herdando da classe pai ItemBiblioteca 
class Livro extends ItemBiblioteca{
    // ISBN vai ser um identificador único para o livro em questão
    ISBN: string;

    // Número de páginas do livro
    numeroDePaginas: number:
    // Gênero do livro 
    genero: string;
    // construtor da classe livro(para inicializar os atributos)
    constructor(titulo:string, autor:string, ISBN:string, numeroDePaginas:number, genero:string){
        // Chamando o constructor da classe base para inicializar título e autor
        super(titulo,autor);
        this.ISBN = ISBN;
        this.numeroDePaginas = numeroDePaginas;
        this.genero = genero;      
    }
    // Método para exibir as informações do livro
    exibirInformacoes(): string{
        return `${super.exibirInformacoes()}, ISBN: ${this.ISBN}, Páginas: ${this.numeroDePaginas}, Gênero: ${this.genero}`
    }
}
// Classe que representa uma Revista, herdando de ItemBiblioteca 
class Revista extends ItemBiblioteca{
    // atributo para o número de edição da revista
    edicao: number;
    // Atributo para o mês da publicação
    mesPublicacao: string;
    // Construtor da classe Revista (inicializar todos os atributos)
    constructor(titulo: string, autor: string, editora: string, numeroEdicao:string, mesPublicacao: string){
        // chamar o construtor da classe pai (para o titulo e o autor)
        super(titulo,autor);
        this.editora = editora;
        this.numeroEdicao = numeroEdicao;
        this.mesPublicacao = mesPublicacao;
    }
    // método para exibir informações da revista
    exibirInformacoes(): string{
        return `${super.exibirInformacoes()}, Editora: ${this.editora}, Mês de publicação: ${this.mesPublicacao}`
    }
}