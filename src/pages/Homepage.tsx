import React from 'react'
import { usePokemon } from '../hooks/usePokemon'

export const HomePage = () => {
  usePokemon()

  return (
    <div className="mt-5">
      <h1>Listado de Pokemons</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Image</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
