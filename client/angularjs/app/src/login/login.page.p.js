'use strict'

class LoginPage{
 constructor(){
   this.filtro = element(by.model('PokemonsController.filtro'));
   this.resultados = element.all(by.repeater('item in PokemonsController.pokemons'));
 }

 visit(){
   return browser.get('/#!/');
 }
}
module.exports = LoginPage;