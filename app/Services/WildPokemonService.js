import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { _pokeApi } from "./AxiosService.js"

class WildPokemonService{
  async setActive(name) {
    const res = await _pokeApi.get('pokemon/' + name)
    ProxyState.activePokemon = new ActivePokemon(res.data) 
    console.log(ProxyState.activePokemon)
  }
  async getPokes() {
    const res = await _pokeApi.get('pokemon?limit=200')
    console.log(res.data)
    ProxyState.wildPokemon = res.data.results
  }

}


export const wildPokemonService = new WildPokemonService()