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
exports.Masajista = void 0;
var personal_1 = require("./personal");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(pNombre, pEdad, pAntiguedad, pTurno, pSexo) {
        var _this = _super.call(this, pNombre, pEdad, pAntiguedad) || this;
        _this.turno = pTurno;
        _this.sexo = pSexo;
        return _this;
    }
    Masajista.prototype.getTurno = function () {
        return this.turno;
    };
    Masajista.prototype.setTurno = function (pTurno) {
        this.turno = pTurno;
    };
    Masajista.prototype.getSexo = function () {
        return this.sexo;
    };
    Masajista.prototype.setSexo = function (pSexo) {
        this.sexo = pSexo;
    };
    return Masajista;
}(personal_1.Personal));
exports.Masajista = Masajista;
