import {
    Personal
} from "./personal";

export class Masajista extends Personal {

    protected turno: string;
    protected sexo: string;

    constructor(pNombre: string, pEdad: number, pAntiguedad: number, pTurno: string, pSexo: string) {
        super(pNombre, pEdad, pAntiguedad)
        this.turno = pTurno;
        this.sexo = pSexo;
    }

    public getTurno() {
        return this.turno;
    }

    public setTurno(pTurno: string): void {
        this.turno = pTurno;
    }

    public getSexo() {
        return this.sexo;
    }

    public setSexo(pSexo: string): void {
        this.sexo = pSexo;
    }
}