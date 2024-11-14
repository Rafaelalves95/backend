class PoteVitaminas {
    #vitaminas
    constructor(){
        this.#vitaminas = ["Vitamina C","Vitamina D","Vitamina B12"]
   
    }
    abrirPote(){
        if(this.#vitaminas.length > 0){
            const vitamina = this.#vitaminas.pop()
            console.log(`O pote não está vazio!. E peguei uma ${vitamina}`)
        }else{
            console.log("O pote está vazio!")
        }
    }
    contarVitaminas(){
        return `O pote tem ${this.#vitaminas.length} vitaminas restantes`
    }
}

const meuPote = new PoteVitaminas()
console.log(meuPote.contarVitaminas)
meuPote.abrirPote()
console.log(meuPote.contarVitaminas)
meuPote.abrirPote()
meuPote.abrirPote()
meuPote.abrirPote()

