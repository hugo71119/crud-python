import React, { useEffect, useState } from 'react'
import { getTodasLasTareas } from '../api/tarea.api';
import TareasBucle from './TareasBucle';

export default function VerTareas() {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    async function cargarTareas() {
      const res = await getTodasLasTareas()
      setDatos(res.data);
    }
    cargarTareas()
  }, [])
  
  return (
    <div className="container mx-auto my-9 ">
        <p className="text-white text-3xl text-center">Ver Tareas</p>
        <TareasBucle datos={datos}/>
    </div>
  )
}
