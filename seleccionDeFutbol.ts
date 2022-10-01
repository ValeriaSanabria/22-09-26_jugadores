import { Personal } from "./personal";
import { Futbolistas } from "./futbolistas";
import { Masajista } from "./masajista";

let futbolista1 = new Futbolistas("Juan Perez",25,3,"Delantero",9);
console.log("El jugador " + futbolista1.getNombre() + "juega en la posicion de " + futbolista1.getPosicion);