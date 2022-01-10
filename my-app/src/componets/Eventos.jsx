import React, { useState } from 'react'

const Eventos = () => {

  const [texto, setTexto] =  useState('texto desde estado')

  const eventoClick = () => {
    console.log('mediste un click')
    setTexto('cambiando el texto')
  }

  return (
    <div>
      <hr />
      <h2>{ texto }</h2>
      <button onClick={() => eventoClick()}>click</button>
    </div>
  )
}

export default Eventos
