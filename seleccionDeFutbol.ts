export class SeleccionDeFutbol {

    protected nombreSeleccion: string;

    constructor(nombreSeleccion: string) {
        this.nombreSeleccion = nombreSeleccion;
    }
    public getNombreSeleccion(): string {
        return this.nombreSeleccion;
    }
    public setNombreSeleccion(nombreSeleccion: string): void {
        this.nombreSeleccion = nombreSeleccion;
    }
}