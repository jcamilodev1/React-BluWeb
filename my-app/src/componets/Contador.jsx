import React, { useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0)
  const aumentar = () => {
    console.log('click')
    setContador(contador + 1)
  }
  return (
    <div>
      <h2>contador</h2>
      <h3>Nuestro numero aumentando:  {contador}</h3>
      <h4>
        {
          contador > 3 ? 'es mayor a 3' : 'no es mayor a 3'
        }
      </h4>
      <button onClick={ () => aumentar() }>Aumentar</button>
    </div>
  )
}

export default Contador
