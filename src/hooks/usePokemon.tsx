import { useEffect, useState } from 'react'
import { fetchAllPokemons } from '../helpers/fetchAllPokemons'
import { Pokemon } from '../interfaces/fetchAllPokemonResponse'
export const usePokemon = () => {
  const [isLoading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    // carga de los Pokemons
    fetchAllPokemons().then(pokemons => {
      setLoading(false)
      setPokemons(pokemons)
    })
  }, [])

  return {
    isLoading,
    pokemons,
  }
}
