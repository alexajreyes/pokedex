import { getPokemon } from '../service/getPokemon'
import { FetchAllPokemonResponse } from '../interfaces/fetchAllPokemonResponse'

export const fetchAllPokemons = async () => {
  const resp = await getPokemon.get<FetchAllPokemonResponse>(
    'pokemon?limit=1500'
  )

  console.log(resp)
}
