import { Animal } from "../abstra_animal";
import { MascotaConDueño } from "../interfaces/interMascota";

export class Perro extends Animal implements MascotaConDueño{
    nombre: string;
    edad: number;
    nombreDeDueño: string;

    constructor(nombre:string,edad: number, nombreDeDueño: string){
        super(nombre,edad);
        
        this.nombre = nombre;
        this.edad = edad;
        this.nombreDeDueño = nombreDeDueño
    
    }
    emitirSonido(): void {
        console.log(`\n El perro ladra. Emite el sonido : "Guau" `);
    }
    info_animal(){console.log(`
        Mascota llamada: ${this.nombre} .
        Edad: ${this.edad} años .
        Nombre de su Dueño: ${this.nombreDeDueño} .`);

    }
}

