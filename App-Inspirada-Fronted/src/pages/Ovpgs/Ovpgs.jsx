import React, { memo, useState } from 'react'
import { NavBarSuperior} from '../../componentes/Menus/NavBarSuperior'
import listaCarreras from './ListaCarreras'
import './styleCheckBox.css'
const Items = ({nombre, lista, checked, onChange}) =>{
  return (
    <div className='Item-Personalitation'>
      <CheckboxPersonalitation label={nombre} lista={lista} checked={checked} onChange={onChange}/>
    </div>
  )
}

const CheckboxPersonalitation = ({label, lista, checked, onChange}) =>{
  return (
    <>
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

    <div className='container-carreras'>
      {checked && lista.map((items, i) => (
              <React.Fragment key={i}>
                <Items
                  nombre={items}
                />
              </React.Fragment>
            ))
      }
    </div>
    
    </>
  )
}

export const Ovpgs = () => {
  const [arreglo, setArreglo] = useState(listaCarreras)

  const handleCheckboxChange = (event,{index}) =>{
    console.log(event.target.checked)
    const updateArreglo = [...arreglo]

    if(event.target.checked===true){
      updateArreglo[index].checked=true
      for(let i=0; i<updateArreglo.length; i++){
        if(i!=index) updateArreglo[i].checked=false;
      }
    }else{
      updateArreglo[index].checked=false;
    }
    setArreglo(updateArreglo)
  }

  return (
    <>
        <h1>Carreras</h1>
        {arreglo.map((items, index) => (
        <React.Fragment key={items.id}>
          <Items
            nombre={items.nombre}
            lista = {items.carreras}
            checked={items.checked}
            onChange={(event) => {
              handleCheckboxChange(event, { index })
            }}
          />
        </React.Fragment>
      ))}
    </>
  )
}