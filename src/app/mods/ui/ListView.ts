import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styleMap, StyleInfo} from 'lit/directives/style-map.js'

@customElement("list-view")
export class ListView extends LitElement {
  static styles = css`
      :host {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        padding: 10px;
        border: 1px black solid;
        
      }
  `

  render() {
    return html`
      <slot></slot>
    `
  }
}