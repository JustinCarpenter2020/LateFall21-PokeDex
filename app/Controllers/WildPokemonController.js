import { ProxyState } from "../AppState.js"
import { wildPokemonService } from "../Services/WildPokemonService.js"


function _drawWildPokemon(){
let template = ''
ProxyState.wildPokemon.forEach(p => template += `<p class="cursor" onclick="app.wildPokemonController.setActive('${p.name}')">${p.name}</p> `)
document.getElementById('wild').innerHTML = template
}

function _drawActivePokemon() {
  document.getElementById('active').innerHTML = ProxyState.activePokemon.Template
  document.getElementById('body').style.backgroundImage = `url('${ProxyState.activePokemon.img}')`
}
export class WildPokemonController{
  constructor(){
    ProxyState.on('wildPokemon', _drawWildPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)
    this.getPokes()
  }

  async getPokes(){
    try {
      await wildPokemonService.getPokes()
    } catch (error) {
      console.error(error)
    }
  }

  async setActive(name){
    try {
      await wildPokemonService.setActive(name)
      
    } catch (error) {
      console.error(error)
    }
  }

}

