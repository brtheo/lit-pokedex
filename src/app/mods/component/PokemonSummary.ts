import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styleMap, StyleInfo} from 'lit/directives/style-map.js'

@customElement("pokemon-summary")
export class PokemonSummary extends LitElement {
  @property() sprite: string
  @property() name: string
  static styles = css`
    :host {
      display: block;
      height: -webkit-fill-available;
    }
    img {
      width: 50px;
      height: auto;
    }
    a {
      display: block;
      height: -webkit-fill-available;
    }
  `

  render() {
    return html`
     <a href="/search">
      <img src=${this.sprite} alt=${this.name} >
     </a>
    `
  }
}