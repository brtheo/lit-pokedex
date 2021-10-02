import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {styleMap, StyleInfo} from 'lit/directives/style-map.js'

@customElement("ui-content")
export class Content extends LitElement {
  static styles = css`
      :host {       
        display: flex;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
  `

  render() {
    return html`
      <slot></slot>
    `
  }
}