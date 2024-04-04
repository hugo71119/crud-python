import {useNavigate} from 'react-router-dom'
import { formatearFecha } from '../helpers/date'

export default function TareasBucle({datos}) {
  const navigate = useNavigate()
  return (
    <>
        {datos.map((dato) => (
            <div className='flex justify-between' key={dato.id}>
              <div className='pl-5 w-3/4'>
                  <h2 className='text-white text-4xl my-4'>- {dato.titulo}</h2>
                  <p className="text-slate-300 text-2xl ml-6 mb-4">{dato.descripcion}</p>
                  <p className="text-slate-300 text-lg ml-6 mb-4">{formatearFecha(dato.date)}</p>
                  {dato.done ? <p className='text-white'>✅ Realizado</p> : <p className='text-white'>❗Pendiente</p>}
              </div>
              <button onClick={() => {
                navigate(`/vertareas/${dato.id}`)
              }} className="mr-7 bg-gray-600 rounded-md p-3 text-white font-bold mt-7">Ver Detalles</button>
            </div>
        ))}
    </>
  )
}
