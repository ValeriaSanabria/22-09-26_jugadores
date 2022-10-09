import {
    Personal
} from "./personal";

export class Masajista extends Personal {
    protected turno: string;

    constructor(pNombre: string, pEdad: number, pAntiguedad: number, pTurno: string) {
        super(pNombre, pEdad, pAntiguedad)
        this.turno = pTurno;
    }

    public getTurno() {
        return this.turno;
    }

    public setTurno(pTurno: string): void {
        this.turno = pTurno;
    }
}