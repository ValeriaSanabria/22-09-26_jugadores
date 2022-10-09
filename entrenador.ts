import {
    Futbolista
} from "./futbolista";
import {
    Personal
} from "./personal";

export class Entrenador extends Personal {
    protected contrato: string;

    constructor(pNombre: string, pEdad: number, pAntiguedad: number, pContrato: string) {
        super(pNombre, pEdad, pAntiguedad);
        this.contrato = pContrato;
    }

    public getContrato() {
        return this.contrato;
    }

    public setContrato(pContrato: string): void {
        this.contrato = pContrato;
    }
}