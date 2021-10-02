import {MobxLitElement} from '@adobe/lit-mobx'
import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styleMap, StyleInfo} from 'lit/directives/style-map.js'

@customElement("search-page")
export class SearchPage extends MobxLitElement {

  @property({type: String, reflect: true})
  private query: string
  static styles = css`
      
    `

  render() {
    return html`
      <h1>Search Page</h1>
      ${this.query}
    `
  }
}