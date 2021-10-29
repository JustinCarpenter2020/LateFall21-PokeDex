export class ActivePokemon{
  constructor(data){
    this.types = data.types
    this.abilities = data.abilities
    this.img = data.sprites.other['official-artwork'].front_default
    this.name = data.name
   }

   get Template(){
     return `<div class="card" style="width: 18rem;">
     <img src="${this.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${this.name}</h5>
       <p class="card-text">${this.Types}</p>
       <button onclick="app.valuesController.addValue()" class="btn btn-primary">Go somewhere</button>
     </div>
   </div>`
   }

   get Types(){
     let template = ''
     this.types.forEach(t =>{
      template += `${t.type.name}, `
     })
     return template
   }
}