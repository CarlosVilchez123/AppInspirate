import React, { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import { NavBarSuperior} from '../../componentes/Menus/NavBarSuperior'
import { FormGroup, FormControlLabel, Checkbox} from '@mui/material'

import './styleOvpgs.css'
const Items = ({nombre}) =>{
  return (
    <FormGroup className='butons-checkbox'>
      <FormControlLabel className='checkboxes' control={<Checkbox />} label={nombre} />
  </FormGroup>
  )
}
export const Ovpgs = () => {

  const listaCarreras =[
    {key: "FC", nombre: "Facultad de Ciencas" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Arquitectura, Urbanismo y Artes" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Ambiental" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Civil" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Económica, Estadística y Ciencias Sociales" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Eléctrica y Electrónica" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Geológica, Minera y Metalúrgica" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Industrial y De Sistemas" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Mecánica" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
    {key: "FC", nombre: "Facultad de Ingeniería Química y Textil" , carreras: ["CC", "Quimica", "Fisica","Ing. Fisica", "Matematica"]},
  ]
  
  const [arreglo, setArreglo] = useState(listaCarreras)

  return (
    <>
        <NavBarSuperior/>

        <h1>Facultades y Carreras</h1>
        <div>
        {arreglo.map(item => <Items key={item.key} nombre ={item.nombre} ></Items>)}
        </div>
    </>
  )
}
