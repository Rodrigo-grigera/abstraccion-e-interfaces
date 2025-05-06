import { Perro } from "./clases_animales/perro";
import { Gato } from "./clases_animales/gato";
import { Pez } from "./clases_animales/pez";

const perro : Perro = new Perro("Fito", 2 ,"Maximiliano");
perro.emitirSonido();
perro.info_animal();

const gato: Gato = new Gato("Feli", 1,"Rodrigo");
gato.emitirSonido();
gato.info_animal()

const pez: Pez = new Pez("Nemo", 34,);
pez.emitirSonido();
pez.info_animal();