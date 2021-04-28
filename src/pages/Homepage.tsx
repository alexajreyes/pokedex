import React, { useState } from 'react'
import { Loading } from '../component/Loading'
import { usePokemon } from '../hooks/usePokemon'
import { Pokemon } from '../interfaces/fetchAllPokemonResponse'

export const HomePage = () => {
  const { isLoading, pokemons } = usePokemon()
  //estado  del buscador
  const [search, setSearch] = useState('')
  // manejo de paginacion
  const INITIAL_PAGE = 0
  const [currentPage, setCurrentePage] = useState(INITIAL_PAGE)

  // filtracion de pokemones
  const filteredPokemon = (): Pokemon[] => {
    if (search.length === 0) return pokemons.slice(currentPage, currentPage + 5)
    // Si Hay algo en la caja de texto
    const filtered = pokemons.filter(poke => poke.name.includes(search))
    return filtered.slice(currentPage, currentPage + 5)
  }
  //funciones para los botones en la paginación
  const nextPage = () => {
    if (
      pokemons.filter(poke => poke.name.includes(search)).length >
      currentPage + 5
    )
      setCurrentePage(currentPage + 5)
  }
  const previousPage = () => {
    if (currentPage > 0) setCurrentePage(currentPage - 5)
  }
  // funciones para capturar el valor del buscador
  const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentePage(0)
    setSearch(target.value)
  }

  return (
    <div className="mt-5">
      <h1>Listado de Pokemons</h1>
      <input
        type="text"
        className="mb-2 form-control"
        placeholder="Buscar Pokemons"
        value={search}
        onChange={onSearchChange}
      />
      <button onClick={previousPage} className="btn btn-primary">
        Anteriores
      </button>
      &nbsp;
      <button onClick={nextPage} className="btn btn-primary">
        Siguientes
      </button>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 100 }}>ID</th>
            <th style={{ width: 100 }}>Nombre</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            /*
          Sin destructuracion
          {pokemons.map(poke => (
            <tr key={poke.id}>
              <td>{poke.id}</td>
              <td>{poke.name}</td>
              <td></td>
            </tr>
          ))} */
            filteredPokemon()?.map(({ id, name, pic }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img src={pic} alt={name} style={{ height: 75 }} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {isLoading && <Loading />}
    </div>
  )
}
