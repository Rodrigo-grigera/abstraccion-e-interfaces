"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pez = void 0;
var Pez = /** @class */ (function () {
    function Pez(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Pez.prototype.emitirSonido = function () {
        console.log("\n El Pez emite el sonido : \"Glub glub\" ");
    };
    Pez.prototype.info_animal = function () {
        console.log("\n        Mascota llamada: ".concat(this.nombre, " .\n        Edad: ").concat(this.edad, " a\u00F1os ."));
    };
    return Pez;
}());
exports.Pez = Pez;
