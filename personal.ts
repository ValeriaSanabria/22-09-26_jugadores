export class Personal {
    protected nombreApellido: string;
    protected edad: number;
    protected antiguedad: number;

    constructor(pNombre: string, pEdad: number, pAntiguedad: number) {
        this.nombreApellido = pNombre;
        this.edad = pEdad;
        this.antiguedad = pAntiguedad;
    }

    public getNombre() {
        return this.nombreApellido;
    }

    public setNombre(pNombre: string): void {
        this.nombreApellido = pNombre
    }

    public getEdad() {
        return this.edad;
    }

    public setEdad(pEdad: number): void {
        this.edad = pEdad;
    }

    public getAntiguedad() {
        return this.antiguedad;
    }

    public setAntiguedad(pAntiguedad: number): void {
        this.antiguedad = pAntiguedad;
    }
}