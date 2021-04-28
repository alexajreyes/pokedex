import { getPokemon } from '../service/getPokemon'
import {
  FetchAllPokemonResponse,
  SmallPokemon,
  Pokemon,
} from '../interfaces/fetchAllPokemonResponse'

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  const resp = await getPokemon.get<FetchAllPokemonResponse>(
    'pokemon?limit=1500'
  )
  const smallPokemonsList = resp.data.results
  return tranformSmallPokemonIntoPokemon(smallPokemonsList)

  console.log(resp)
}

const tranformSmallPokemonIntoPokemon = (
  smallPokemonList: SmallPokemon[]
): Pokemon[] => {
  const pokemonArr: Pokemon[] = smallPokemonList.map(poke => {
    //obtencion de id
    const pokeArre = poke.url.split('/')
    const id = pokeArre[6]
    //obtencion de imagen
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return {
      id,
      name: poke.name,
      pic,
    }
  })
  console.log(pokemonArr)
  return pokemonArr
}
