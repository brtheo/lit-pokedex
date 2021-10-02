const API = "https://pokeapi.co/api/v2"

type NameURLStruct = {name: string, url: string}

type EvolutionDetails = {
  item: any
  trigger: NameURLStruct
  gender: any
  held_item: any
  known_move: any
  known_move_type: any
  location: any
  min_level: number
  min_happiness: any
  min_beauty: any
  min_affection: any
  needs_overworld_rain: boolean
  party_species: any
  party_type: any
  relative_physical_stats: any
  time_of_day: string
  trade_species: any
  turn_upside_down: boolean
}
type EvolvesTo = Array<{
  is_baby: boolean
  species: NameURLStruct
  evolution_details: EvolutionDetails | any
  evolves_to: EvolvesTo | any
}>
interface IResponse {
  "/pokemon": {
    param: number
    res: {
      id: number
      name: string
      base_experience: number
      height: number
      is_default: boolean
      order: number
      weight: number
      location_area_encounters: string
      abilities: Array<{
        isHidden: boolean
        slot: number
        ability: NameURLStruct
      }>
      forms: Array<NameURLStruct>
      game_indices: Array<{
        game_index: number
        version: NameURLStruct
      }>
      held_items: Array<{
        item: NameURLStruct
        version_details: Array<{
          rarity: number
          version: NameURLStruct
        }>
      }>
      moves: Array<{
        move: NameURLStruct
        version_group_details: Array<{
          level_learned_at: number
          version_group: NameURLStruct
          move_learn_method: NameURLStruct
        }>
      }>
      species: NameURLStruct
      sprites: {
        back_female: string
        back_shiny_female: string
        back_default: string
        front_female: string
        front_shiny_female: string
        back_shiny: string
        front_default: string
        front_shiny: string
        other: {
          dream_world: {
            front_default: string
            front_female: string | any
          } | any
          "official-artwork": {
            front_default: string
          } | any
        }
        versions: any
      }
      stats: Array<{
        base_stat: number
        effort: number
        stat: NameURLStruct
      }>
      types: Array<NameURLStruct>
    }
  }
  "/evolution-chain": {
    param: number
    res: {
      id: number
      baby_trigger_item: any
      chain: {
        is_baby: boolean
        species: NameURLStruct
        evolution_details: EvolutionDetails | any
        evolves_to: EvolvesTo | any
      }
    }
  }
}

type BaseApi = "https://pokeapi.co/api/v2"
type ApiEndpoint = keyof IResponse
type Api = `${BaseApi}${ApiEndpoint}`





export const pokeApi = async <K extends ApiEndpoint, T extends IResponse[K]["res"]>(endpoint: K, param: number) => {
  const raw = await fetch(`${API}${endpoint}/${param}`)
  return await raw.json() as Promise<T>
}
type PokemonData = IResponse['/pokemon']['res']
type SpriteURL = PokemonData['sprites']['other']['official-artwork']['front_default']

export const getSprite = (pokemon: PokemonData): SpriteURL => pokemon.sprites.other["official-artwork"].front_default

export const loadSpriteAsImgElement = async (spriteURL: SpriteURL) => {
  const spriteRaw = await fetch(spriteURL)
  const sprite = await spriteRaw.blob()
  return URL.createObjectURL(sprite)
}
