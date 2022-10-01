import { Futbolistas } from "./futbolistas";
import { Personal } from "./personal";

export class Entrenador extends Personal{

protected listaFutbolistas:Futbolistas;
protected contrato: string;

constructor(pNombre:string,pEdad:number,pAntiguedad:number,pLista:Futbolistas,pContrato:string){
    super(pNombre,pEdad,pAntiguedad);
    this.listaFutbolistas = pLista;
    this.contrato = pContrato;
}

getContrato(){
    return this.contrato;
}

setContrato(pContrato:string):void{
    this.contrato = pContrato;
}

}