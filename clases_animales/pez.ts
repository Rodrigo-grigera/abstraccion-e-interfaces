import { Animal } from "../abstra_animal";


export class Pez extends Animal{
    nombre: string;
    edad: number;

    constructor(nombre:string, edad:number){
        super(nombre,edad);
        
        this.nombre = nombre;
        this.edad = edad        
    }

    emitirSonido(): void {
        console.log(`\n El Pez emite el sonido : "Glub glub" `);
        
    }
    info_animal(): void {console.log(`
        Mascota llamada: ${this.nombre} .
        Edad: ${this.edad} años .`);

    }
        
}
