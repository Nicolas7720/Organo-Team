import React from 'react'
import "./CampoTexto.css"

export const CampoTexto = (props) => {

  // const placeholderModificado = `${props.placeholder}:`

  return (
    <div className='campo-texto'>
        <label htmlFor="">{props.label}</label>
        <input type="text" placeholder={`${props.placeholder}:`}/>
    </div>
  )
}
