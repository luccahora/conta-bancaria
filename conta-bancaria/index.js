import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente2 = new Cliente();

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.depositar(120)

contaCorrenteRicardo.sacar(20);


const conta2 = new ContaCorrente();
conta2.cliente = 0;
conta2.agencia = 102;

let valor = 200
contaCorrenteRicardo.transferir(valor,conta2)
console.log(conta2);



