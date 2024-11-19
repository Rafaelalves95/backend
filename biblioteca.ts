// Classe base (pai) ItemBiblioteca
class ItemBiblioteca{
    //Atributo que representa o título do item
    titulo: string;
    // Atributo autor
    autor: string;
    // Vamos construir a classe base(inicializa todos os atributos comuns)
    constructor(titulo: string, autor: string){
        this.titulo = titulo
        this.autor = autor
    }
    // Método que exibe as informações gerais do item biblioteca
    exibirInformacoes(): string{
        return `Título: ${this.titulo}, Autor: ${this.autor}`
    }
}
// Subclasse que representa um livro, herdado da classe pai Item Biblioteca
class Livro extends ItemBiblioteca{
    // ISBN Vai ser um identificador único para o livro em questão
    ISBN: string;
    //Número de páginas do livro 
    numeroDePaginas: number;
    //Gênero do livro
    Gênero : string;
    // Construtor da classe livro para inicializar os atributos
    constructor(titulo:string, autor:string, ISBN: string, numeroDePaginas: number, Gênero: string,){
        // Chamando o construtor da classe base para inicializar título e autor
        super(titulo, autor)
        this.ISBN = ISBN
        this.numeroDePaginas = numeroDePaginas
        this.Gênero = Gênero
    }
    // Método para exibir as informações do livro
    exibirInformacoes(): string {
        return `${super.exibirInformacoes()}, ISBN: ${this.ISBN}, numeroDePaginas: ${this.numeroDePaginas}, Gênero: ${this.Gênero}`
    }
}
// Classe que representa uma Revista, herdando do ItemBiblioteca
class Revista extends ItemBiblioteca{
    // Atributo para o número de edição da revista
    edicao: number; 
    // Atributo para o mês da publicação
    mesPublicacao: string;
    editora: string;
    //numeroEdicao: string
    // Construtor da classe Revista (Inicializar todos os atributos)
    constructor(titulo:string, autor:string, edicao: number, mesPublicacao: string, editora: string,){
        super(titulo, autor)
        this.editora = editora
        this.edicao = edicao
        this.mesPublicacao = mesPublicacao
    }
    // Método para exibir informações da revista 
    exibirInformacoes(): string {
        return `${super.exibirInformacoes()}, editora: ${this.editora}, edicao: ${this.edicao}, mesPublicacao: ${this.mesPublicacao}`
    }
}