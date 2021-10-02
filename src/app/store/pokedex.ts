import {action, observable, computed} from 'mobx'
import {makeLocalStorage} from './makeLocalStorage'

class pokedex {
  @observable public pokemon = "dd"
  @action public setPokemon = (p) => this.pokemon = p

  
}

export const state = new pokedex()