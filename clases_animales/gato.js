"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(nombre, edad, nombreDeDueño) {
        this.nombre = nombre;
        this.edad = edad;
        this.nombreDeDueño = nombreDeDueño;
    }
    Gato.prototype.emitirSonido = function () {
        console.log("\n El Gato mausha. Emite el sonido : \"Miau\" ");
    };
    Gato.prototype.info_animal = function () {
        console.log("\n            Mascota llamada: ".concat(this.nombre, " .\n            Edad: ").concat(this.edad, " a\u00F1os .\n            Nombre de su Due\u00F1o: ").concat(this.nombreDeDueño, " ."));
    };
    return Gato;
}());
exports.Gato = Gato;
