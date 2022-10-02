"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var personal_1 = require("./personal");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(pNombre, pEdad, pAntiguedad, pContrato) {
        var _this = _super.call(this, pNombre, pEdad, pAntiguedad) || this;
        _this.contrato = pContrato;
        return _this;
    }
    Entrenador.prototype.getContrato = function () {
        return this.contrato;
    };
    Entrenador.prototype.setContrato = function (pContrato) {
        this.contrato = pContrato;
    };
    return Entrenador;
}(personal_1.Personal));
exports.Entrenador = Entrenador;
