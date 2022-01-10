import React, { useState } from 'react'

const Listas = () => {
  const estadoInicial = [
    {id: 1, texto: 'tarea 1'},
    {id: 2, texto: 'tarea 2'},
    {id: 3, texto: 'tarea 3'},
    {id: 4, texto: 'tarea 4'}

  ]
  const [lista,setLista] =  useState(estadoInicial)
  const agregarElemento = () => {
    console.log('click')
    setLista([
      ...lista,
      {id:5, texto: 'tarea 5'}
    ])
  }
  return (
    <div>
      <h2>Lista</h2>
      {
        lista.map( (item) =>(
          <h4 key={item.id}>{item.texto}</h4>
        ) )
      }
      <button onClick={() =>  agregarElemento()}>click</button>
    </div>
  )
}

export default Listas
