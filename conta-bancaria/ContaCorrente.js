import { Cliente } from "./Cliente.js";

export class ContaCorrente { 
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }   
    }

    get cliente(){
        return this.cliente;
    }
    _saldo = 0;
    
    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valorSacar) {
        if (this._saldo >= valorSacar) {
            this._saldo -= valorSacar;
            return valorSacar;
        }
    }
    depositar(valorDeposito) {
       if(valorDeposito <= 0){
           return;
       }
       this._saldo += valorDeposito
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }
}