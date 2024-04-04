import {useForm} from 'react-hook-form'
import { crearTareas, eliminarTarea, getUnaTarea } from '../api/tarea.api';
import { useNavigate, useParams } from 'react-router-dom';
import CrearTareaComponent from './CrearTareaComponent';
import { useEffect, useState } from 'react';

export default function CrearTareas() {
  const [tarea, setTarea] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  if (params.id) {
    useEffect(() => {
      async function loadTarea(){
        const res = await getUnaTarea(params.id)
        setTarea(res.data);
      }
      loadTarea()
    }, [])
  }

  return (
    <div className="w-3/4 mx-auto">
    {params.id ? 
      <div className='text-center h-screen flex flex-col items-center justify-center'>
        <h2 className='text-white text-3xl font-bold mb-5'>{tarea.titulo}</h2>
        <p className='text-white text-xl mb-3'>{tarea.descripcion}</p>
        {tarea.done ? <p className='text-white'>✅ Realizado</p> : <p className='text-white'>❗Pendiente</p>}
        {params.id && 
        <div className="flex gap-4">
          <button onClick={async () => {
            const res = window.confirm("Estas seguro?")
            if (res){
              await eliminarTarea(params.id)
              navigate('/vertareas')
            }
          }} className="bg-red-600 rounded-md p-3 text-white font-bold mt-10">Eliminar Tarea</button>
          <button onClick={() => navigate(`/editartarea/${tarea.id}`)} className='bg-blue-600 rounded-md p-3 text-white font-bold mt-10'>Editar</button>
        </div>
        }
      </div> :
        <CrearTareaComponent/>
    }
    </div>
  )
}
