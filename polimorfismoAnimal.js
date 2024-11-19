// classe base Animal
class Animal {
    fazerSom(){
        console.log("Esse animal faz um som")
    }

}

// Agora, temoss diferentes animais que vão herdar da classe  base Animal
class Cachorro extends Animal{
    fazerSom(){
        console.log("Auau!")
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("Miau")
    }
}
class Vaca extends Animal{
    fazerSom(){
        console.log("Muu")
    }
}
// criando instâncias/animais
const meuCachorro = new Cachorro()
const meuGato = new Gato()
const minhaVaca = new Vaca()
//  gerando o som
meuCachorro.fazerSom()
meuGato.fazerSom()
minhaVaca.fazerSom()
