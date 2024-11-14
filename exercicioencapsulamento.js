class Pessoa {
    #nome 
    #idade  
    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }
    alterarIdade(novaIdade){
        if(novaIdade > 0){
            this.#idade = novaIdade
            return `Idade alterada para ${novaIdade} anos.`
        }else{
            return 'Idade Inválida'
        }
    }
mostrarInformações(){
    return `Nome: ${this.#nome}, Idade: ${this.#idade} anos.`

}}
const pessoa = new Pessoa('Cassiano', 15)
console.log(pessoa.mostrarInformações())
console.log(pessoa.alterarIdade(18))
console.log(pessoa.mostrarInformações())