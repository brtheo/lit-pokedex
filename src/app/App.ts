import {LitElement, html, css, TemplateResult} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {until} from 'lit/directives/until.js'
import {MobxLitElement} from '@adobe/lit-mobx'
import {state} from './store/pokedex'

//UI IMPORTS
import './mods/ui/Content'
import './mods/ui/ListItem'
import './mods/ui/ListView'

//COMPONENTS IMPORTS
import './mods/component/PokemonSummary'



import Navigo from 'navigo'

import {pokeApi, getSprite, loadSpriteAsImgElement} from './mods/utils/api'
@customElement("pokedex-app")
export class App extends MobxLitElement {

  @property({type: Object, attribute: false})
  private page: TemplateResult  

  private router = new Navigo("/")

  @property({type: Object, attribute: false}) sprite: TemplateResult

  async getSprite() {
    const data = await pokeApi("/pokemon",100)
    state.setPokemon(data.name)
    const sprite = getSprite(data)
    const imgSrc = await loadSpriteAsImgElement(sprite)
    return html`<img src=${imgSrc} />`
    
  }

  constructor() {
    super()

    this.router.on({
      '/': async () => {
        await import('./mods/page/Home')
        this.page = html`<home-page></home-page>`
      },
      '/search/:query': async ({data: {query}}) => {
        await import('./mods/page/Search')
        this.page = html`<search-page query=${query}></search-page>`
      },
      '/pokemon/:pokemon': async ({data: {pokemon}}) => {
        await import('./mods/page/Pokemon')
        this.page = html`<pokemon-page pokemon=${pokemon}></pokemon-page>`
      }
    }).resolve()
  }

  static styles = css`
    :host {
      height: 100vh;
      width: 100vw;
      display: grid;
    }
    home-page,search-page,pokemon-page {
      display: block;
      width: 100%;
      font-family: var(--font);
      color: var(--textColor);
      margin: 15px;
    }
  `

  render(): TemplateResult {
    return html`
      <ui-content>
        ${this.page}
      </ui-content>
      <!-- <a href="/pokemon/1">pokemon</a>
      <a href="/">home</a>
      <a href="/search/ditto">Search</a>
      ${until(this.getSprite(), html`<span class="big">loading</span>`)} -->
    `
  }
}
