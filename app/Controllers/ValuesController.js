import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let cardsTemplate = ''
  values.forEach(v => cardsTemplate += v.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

//Public
export class ValuesController {
  constructor() {
    // ProxyState.on("values", _draw);
    // _draw()
  }

  addValue() {
    document.getElementById('body').classList.add("animate-flicker")
   let audio = document.getElementById('battle')
   audio.play()
   setInterval(() => {
    audio.pause()
     document.getElementById('body').classList.remove("animate-flicker")}, 4000)
  }

  removeValue(id) {
    valuesService.removeValue(id)
  }

}
