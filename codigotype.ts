// Classe Animal: a classe pai (base)
class Animal{
    // Propriedades básicas que todos os animais terão
    nome: string
    idade: number
    especie: string
    raca: string
    peso: number

    // Construtor da classe Animal (inicializa as Propriedades quando um novo objeto é criado)
    constructor(nome:string,idade: number, especie: string, raca: string, peso: number){
        this.nome = nome
        this.idade = idade
        this.especie = especie
        this.raca = raca
        this.peso = peso
    }
    // Método emitirSom(): cada tipo de animal pode ter um som específico 
    emitirSom(): string{
        return "Som do animal (genérico)" // Som que qualquer animal emite
    }
    // Método interagir (): Simular a interação com o animal (ex: Alimentar, brincar)
    interagir(acao: string): string{
        // Dependendo da ação, o retorno muda
        if(acao === "alimentar"){
            return `${this.nome} está comendo` // Se for alimentar, retorna a mensagem que o animal está comendo
        }else if (acao === "brincar"){
            return `${this.nome} está brincando` // Se for brincar, retorna a mensagem que o animal está brincando
        }else{
            return `${this.nome} não sabe o que fazer` // Se a ação não for alimentar ou brincar, o animal não sabe o que fazer
        }
    }
}

// Classe mamífero que herda da Animal (aqui tem atributos específicos dos mamíferos)
class Mamifero extends Animal{
    tipoPelagem: string // tipo de pelagem do mamífero(ex. curta, longa, etc.)
    amamenta: boolean // Se o mamífero amamenta seus filhotinhos(True or False)

    // O Construtor do mamífero que vai chamar o Construtor pai de todos (Animal | super) para inicializar as Propriedades herdadas
    constructor(nome:string, idade:number, especie:string, raca:string, peso: number, tipoPelagem:string, amamenta:boolean){
        super(nome,idade,especie,raca,peso) // Tudo isso vem da classe Superior Animal
        this.tipoPelagem = tipoPelagem // atribui o tipo de pelagem
        this.amamenta = amamenta // atribui se amamenta ou não
    }
    // Sobrescrever o Método emitirSom para os mamíferos, criando um som específico para esse grupo 
emitirSom():string{
    return "Som típico de um mamífero (latido, miado, etc.)" //ex de som emitido pelos mamiferos

}
}
// Classe Ave que herda da super Animal com suas características próprias
class Ave extends Animal{
    envergaduraAsas: number
    tipoBico: string
    // O Construtor da classe Ave também chama da super 
    constructor(nome:string, idade:number, especie:string, raca:string,peso:number,envergaduraAsas:number,tipoBico:string){
        super(nome, idade, especie,raca,peso)
        this.envergaduraAsas = envergaduraAsas
        this.tipoBico = tipoBico
    }
    // Utilizando o Polimorfismo ao Sobrescrever o Método emitirSom para as Aves
    emitirSom():string{
        return "Som típico de uma ave (canto, piado)"
    }
}
// Classe peixe que herda do animal
class Peixe extends Animal{
    tamanhoAquario: number
    tipoAlimento: string
    // O Construtor da classe peixe também usa atributos da classe pai Animal
    constructor(nome:string, idade:number, especie:string, raca:string, peso:number,tamanhoAquario:number,tipoAlimento:string){
        super(nome,idade,especie,raca,peso)
        this.tamanhoAquario = tamanhoAquario
        this.tipoAlimento = tipoAlimento
    }
    // Usando Polimorfismo ao Sobrescrever o método emitirSom para peixes. Mas peixes não emitem som audíveis aos seres humanos
    emitirSom(): string{
        return "Peixes não emitem som audíveis"
    }
}

// Função principal que simula o sistema de cadastro e interação com os animais
function sistemaDeAnimais(){
    // Criando instâncias de diferentes tipos de animais
    const cachorro = new Mamifero("Dog",5,"Cachorro","Guaipeca",30,"curta",true)
    const papagaio = new Ave("Chico",2,"Papagaio","Amazônico", 50, 1.2,"Curto")
    const baiacu = new Peixe("Nemo",6,"Peixe","baiacu",32,30,"Algas")

    //Exibindo as interações com cada animal
    console.log(cachorro.emitirSom()) // Exibi o som do cachorro 
    console.log(cachorro.interagir("brincar"))

    console.log(papagaio.emitirSom())
    console.log(papagaio.interagir("alimentar"))

    console.log(baiacu.emitirSom())
    console.log(baiacu.interagir("nadar"))

}

// Executar a função principal
sistemaDeAnimais()