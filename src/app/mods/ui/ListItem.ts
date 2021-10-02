import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styleMap, StyleInfo} from 'lit/directives/style-map.js'

@customElement('list-item')
export class ListItem extends LitElement {
  static styles = css`
      :host {
        border: solid black 1px;
        min-height: 50px;
      }
    `

  render() {
    return html`
      <slot></slot>
    `
  }
}