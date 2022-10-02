"use strict";
exports.__esModule = true;
exports.Personal = void 0;
var Personal = /** @class */ (function () {
    function Personal(pNombre, pEdad, pAntiguedad) {
        this.nombreApellido = pNombre;
        this.edad = pEdad;
        this.antiguedad = pAntiguedad;
    }
    Personal.prototype.getNombre = function () {
        return this.nombreApellido;
    };
    Personal.prototype.setNombre = function (pNombre) {
        this.nombreApellido = pNombre;
    };
    Personal.prototype.getEdad = function () {
        return this.edad;
    };
    Personal.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    Personal.prototype.getAntiguedad = function () {
        return this.antiguedad;
    };
    Personal.prototype.setAntiguedad = function (pAntiguedad) {
        this.antiguedad = pAntiguedad;
    };
    return Personal;
}());
exports.Personal = Personal;
