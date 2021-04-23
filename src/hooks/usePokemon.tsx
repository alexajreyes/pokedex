import { useEffect, useState } from 'react'
import { fetchAllPokemons } from '../helpers/fetchAllPokemons'

export const usePokemon = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // carga de los Pokemons
    fetchAllPokemons()
  }, [])
}
