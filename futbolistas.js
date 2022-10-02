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
exports.Futbolistas = void 0;
var personal_1 = require("./personal");
var Futbolistas = /** @class */ (function (_super) {
    __extends(Futbolistas, _super);
    function Futbolistas(pNombre, pEdad, pAntiguedad, pPosicion, pCamiseta) {
        var _this = _super.call(this, pNombre, pEdad, pAntiguedad) || this;
        _this.posicion = pPosicion;
        _this.numCamiseta = pCamiseta;
        return _this;
    }
    Futbolistas.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolistas.prototype.setPosicion = function (pPosicion) {
        this.posicion = pPosicion;
    };
    Futbolistas.prototype.getCamiseta = function () {
        return this.numCamiseta;
    };
    Futbolistas.prototype.setCamiseta = function (pCamiseta) {
        this.numCamiseta = pCamiseta;
    };
    return Futbolistas;
}(personal_1.Personal));
exports.Futbolistas = Futbolistas;
