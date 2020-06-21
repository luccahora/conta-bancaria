export class ContaCorrente {
    agencia;
    _saldo = 0;
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
}