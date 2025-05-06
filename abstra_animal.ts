/*clase abstracta de animal*/
import { AnimalDomestico } from "./interfaces/interfaceAnimal";

export abstract class Animal implements AnimalDomestico{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    abstract emitirSonido(): void;
    abstract info_animal(): void;
}