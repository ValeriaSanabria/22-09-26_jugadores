import {
    Personal
} from "./personal";
import {
    Futbolistas
} from "./futbolistas";
import {
    Masajista
} from "./masajista";
import {
    Entrenador
} from "./entrenador";

let futbolista1 = new Futbolistas("Juan Perez", 25, 3, "Delantero", 9);
let futbolista2 = new Futbolistas("Jose Diaz", 30, 5, "Defensa", 3);
let futbolista3 = new Futbolistas("Guillermo Lopez", 27, 4, "Centro", 15);

let listaDeJugadores = [futbolista1, futbolista2, futbolista3];

console.log("El jugador " + futbolista1.getNombre() + " juega en la posicion de " + futbolista1.getPosicion());


let entrenador1 = new Entrenador("Elias Gonzalez", 50, 25, "Director Tecnico");

console.log("El entrenador " + entrenador1.getNombre() + " entrena a " + listaDeJugadores[1].getNombre());