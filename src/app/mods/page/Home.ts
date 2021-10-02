import {MobxLitElement} from '@adobe/lit-mobx'
import {customElement, property} from 'lit/decorators.js'
import {html, css} from 'lit'
import {repeat} from 'lit/directives/repeat.js'



@customElement("home-page")
export class HomePage extends MobxLitElement {
  @property({type: Array}) items = [
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},

    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"},
    {id: 1, name: "babouin"}
  ]
  static styles =  css`
    ui-content {
      flex-direction: column;
    }
  `
  

  render() {
    return html`
     <ui-content>
      <h1>Pokedex</h1>
      <list-view>
        ${repeat(this.items, (item) => item.id, (item, index) => html`
            <list-item>
              <pokemon-summary src=${item.name} name=${item.name}></pokemon-summary>
            </list-item>
        `)}
      </list-view>
     </ui-content>
    `
  }
}