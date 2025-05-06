/*Iniciar Proyecto NPM: (Si aún no lo tienen) Inicialicen un nuevo proyecto de Node.js con npm init -y e instalen TypeScript como dependencia de desarrollo con npm install --save-dev typescript @types/node. Asegúrense de tener configurado el archivo tsconfig.json.

Definir Interfaces:

Creen una interfaz llamada AnimalDomestico con las siguientes propiedades:
nombre: string
edad: number
emitirSonido(): void
Creen otra interfaz llamada MascotaConDueño con la siguiente propiedad:
nombreDueño: string
Crear Clase Abstracta:

Definan una clase abstracta llamada Animal que implemente la interfaz AnimalDomestico. Esta clase debe tener las propiedades nombre y edad (con un nivel de acceso protegido o privado y proporcionando getters para acceder a ellas). Declaren el método emitirSonido() como un método abstracto.
Crear Clases Concretas:

Creen las siguientes clases que extiendan de la clase abstracta Animal:
Perro: Esta clase debe implementar la interfaz MascotaConDueño y tener una propiedad adicional llamada raza (de tipo string). Implementen el método emitirSonido() para que muestre en la consola un ladrido (por ejemplo, "¡Guau guau!").
Gato: Esta clase debe implementar la interfaz MascotaConDueño y tener una propiedad adicional llamada colorPelaje (de tipo string). Implementen el método emitirSonido() para que muestre un maullido (por ejemplo, "¡Miau!").
Pez: Esta clase debe tener una propiedad adicional llamada tipoAgua (de tipo string, por ejemplo, "dulce" o "salada"). Implementen el método emitirSonido() para que muestre un sonido genérico de pez (por ejemplo, "Glub glub").
Crear Instancias y Probar:

En un archivo principal (por ejemplo, main.ts), creen instancias de cada una de las clases concretas (Perro, Gato, Pez).
Llamen al método emitirSonido() de cada instancia.
Para las instancias de Perro y Gato, accedan y muestren en la consola las propiedades nombreDueño.
Muestren en la consola las propiedades nombre y edad de cada animal utilizando los getters definidos en la clase abstracta Animal.
Muestren en la consola las propiedades específicas de cada clase concreta (raza del Perro, colorPelaje del Gato, tipoAgua del Pez). */


export interface MascotaConDueño{
    nombreDeDueño : string;
}