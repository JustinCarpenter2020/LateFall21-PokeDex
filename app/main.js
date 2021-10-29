import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonController } from "./Controllers/WildPokemonController.js";

class App {
  valuesController = new ValuesController();
  wildPokemonController = new WildPokemonController();
}

window["app"] = new App();
