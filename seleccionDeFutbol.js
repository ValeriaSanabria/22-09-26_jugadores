"use strict";
exports.__esModule = true;
exports.SeleccionDeFutbol = void 0;
var SeleccionDeFutbol = /** @class */ (function () {
    function SeleccionDeFutbol(nombreSeleccion) {
        this.nombreSeleccion = nombreSeleccion;
    }
    SeleccionDeFutbol.prototype.getNombreSeleccion = function () {
        return this.nombreSeleccion;
    };
    SeleccionDeFutbol.prototype.setNombreSeleccion = function (nombreSeleccion) {
        this.nombreSeleccion = nombreSeleccion;
    };
    return SeleccionDeFutbol;
}());
exports.SeleccionDeFutbol = SeleccionDeFutbol;
