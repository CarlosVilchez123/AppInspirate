import React, { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import { NavBarSuperior} from '../../componentes/Menus/NavBarSuperior'
import { FormGroup, FormControlLabel, Checkbox} from '@mui/material'

import './styleOvpgs.css'
import './styleCheckBox.css'
const Items = ({nombre}) =>{
  return (
    <div className='Item-Personalitation'>
      <CheckboxPersonalitation label={nombre}/>
    </div>
  )
}

const CheckboxPersonalitation = ({label}) =>{
  return (
    <div className='container-check'>
      <label className='checkbox-label'>
        <input className='input-checkbox' type='checkbox'/>
        <span className='span-checkbox'></span>
      </label>
      <p className='p-check'>{label}</p>
    </div>
    
  )
}

export const Ovpgs = () => {

  const listaCarreras =[
    {key: "FC", nombre: "Facultad de Ciencas" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FAUA", nombre: "Facultad de Arquitectura, Urbanismo y Artes" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIA", nombre: "Facultad de Ingeniería Ambiental" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIC", nombre: "Facultad de Ingeniería Civil" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIEECS", nombre: "Facultad de Ingeniería Económica, Estadística y Ciencias Sociales" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIEE", nombre: "Facultad de Ingeniería Eléctrica y Electrónica" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIGMM", nombre: "Facultad de Ingeniería Geológica, Minera y Metalúrgica" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIIS", nombre: "Facultad de Ingeniería Industrial y De Sistemas" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIM", nombre: "Facultad de Ingeniería Mecánica" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FIQT", nombre: "Facultad de Ingeniería Química y Textil" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
  ]
  
  const [arreglo, setArreglo] = useState(listaCarreras)

  return (
    <>
        <h1>Carreras</h1>
        <div>
          {arreglo.map(item => <Items key={item.key} nombre = {item.nombre}></Items>)}
        </div>
    </>
  )
}