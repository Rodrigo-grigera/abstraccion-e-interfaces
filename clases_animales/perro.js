"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro(nombre, edad, nombreDeDueño) {
        this.nombre = nombre;
        this.edad = edad;
        this.nombreDeDueño = nombreDeDueño;
    }
    Perro.prototype.emitirSonido = function () {
        console.log("\n El perro ladra. Emite el sonido : \"Guau\" ");
    };
    Perro.prototype.info_animal = function () {
        console.log("\n        Mascota llamada: ".concat(this.nombre, " .\n        Edad: ").concat(this.edad, " a\u00F1os .\n        Nombre de su Due\u00F1o: ").concat(this.nombreDeDueño, " ."));
    };
    return Perro;
}());
exports.Perro = Perro;
