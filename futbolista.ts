import {
    Personal
} from "./personal"

export class Futbolista extends Personal {
    protected posicion: string;
    protected numCamiseta: number;

    constructor(pNombre: string, pEdad: number, pAntiguedad: number, pPosicion: string, pCamiseta: number) {
        super(pNombre, pEdad, pAntiguedad);
        this.posicion = pPosicion;
        this.numCamiseta = pCamiseta
    }

    public getPosicion() {
        return this.posicion;
    }

    public setPosicion(pPosicion: string): void {
        this.posicion = pPosicion;
    }

    public getCamiseta() {
        return this.numCamiseta;
    }

    public setCamiseta(pCamiseta: number): void {
        this.numCamiseta = pCamiseta;
    }
}