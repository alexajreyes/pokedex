import axios from 'axios'

export const getPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})
