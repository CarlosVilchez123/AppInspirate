import React, { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import { NavBarSuperior} from '../../componentes/Menus/NavBarSuperior'
import { FormGroup, FormControlLabel, Checkbox} from '@mui/material'
import listaCarreras from './ListaCarreras'
import './styleCheckBox.css'
const Items = ({nombre, checked, onChange}) =>{
  return (
    <div className='Item-Personalitation'>
      <CheckboxPersonalitation label={nombre} checked={checked} onChange={onChange}/>
    </div>
  )
}

const CheckboxPersonalitation = ({label, checked, onChange}) =>{
  return (
    <div className='container-check'>
      <label className='checkbox-label'>
        <input 
          className='input-checkbox' 
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <span className='span-checkbox'></span>
      </label>
      <p className='p-check'>{label}</p>
    </div>
    
  )
}

export const Ovpgs = () => {

  const [arreglo, setArreglo] = useState(listaCarreras)
  
  const handleCheckboxChange = (event,{index}) =>{
    console.log(event.target.checked, " ", index)
    const updateArreglo = [...arreglo]
    if(event.target.checked===true){
      updateArreglo[index].checked=true
      for(let i=0; i<updateArreglo.length; i++){
        if(i!=index) updateArreglo[i].checked=false;
      }
    }
    console.log(updateArreglo)
    setArreglo(updateArreglo)
  }

  return (
    <>
        <h1>Carreras</h1>
        {arreglo.map(
          (items, index) =>
          <Items
            key={items.id}
            nombre={items.nombre}
            checked={items.checked}
            onChange={(event) => handleCheckboxChange(event, { index })}
          />
        )}
    </>
  )
}