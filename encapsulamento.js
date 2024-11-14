class Conta {
    #saldo = 300 // Propriedade privada

    constructor(nome){
        this.nome = nome
    }
    // Método público para adicionar ao saldo
    depositar(valor){
        if(valor > 0){
                this.#saldo += valor
                return `Depósito de R$ ${valor} realizado`
        }
        return 'Valor Inválido para depósito.'
    }
    // Método público para acessar o saldo
    obeterSaldo(){
        return `O saldo é R$ ${this.#saldo}.`
    }
}
const conta = new Conta('Kaike')
conta.depositar(100)
console.log(conta.obeterSaldo())