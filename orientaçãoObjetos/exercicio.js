//Criando a classe cachorro
class cachorro {
    //O construtor inicializa os atributos 'nome' e 'idade'
    constructor(nome, idade){
        this.nome = nome // atribui o nome do cachorro
        this.idade  = idade // atribui a idade do cachorro
    }
    // métodos para o cachorro latir
    latir() {
        console.log("AU, AU, AU") // Exibi o som do latido
    }
    // método para o cachorro fazer aniversário
    aniversário(){
        this.idade += 1 // aumenta a idade do cachorro em 1
    }
}
// criando uma instância do cachorro
let meuCachorro = new cachorro("Rex", 3)
//Chamando o método latir
meuCachorro.latir()
//Chamando o método aniversário
meuCachorro.aniversário()

// Mostrar a idade após o anivesário
console.log(`Agora ${meuCachorro.nome} tem ${meuCachorro.idade} anos`)