import {MobxLitElement} from '@adobe/lit-mobx'
import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement("pokemon-page")
export class PokemonPage extends MobxLitElement {

  @property({type: String, reflect: true}) 
  private pokemon: string
  static styles = css`  
  `

  render() {
    return html`
      <h1>Pokemon Page</h1>
      ${this.pokemon}
    `
  }
}