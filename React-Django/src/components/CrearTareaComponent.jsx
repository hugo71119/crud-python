import { useForm } from 'react-hook-form'
import { crearTareas, editarTarea, eliminarTarea, getUnaTarea } from '../api/tarea.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CrearTareaComponent() {
    const [isChecked, setIsChecked] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
        ,setValue
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            editarTarea(params.id, data)
            console.log('editando...');
        } else {
            await crearTareas(data)
        }
        navigate("/vertareas")
    })

    useEffect(() => {
        async function obtenerTarea() {
            if (params.id) {
                const res = await getUnaTarea(params.id)
                setValue('titulo', res.data.titulo)
                setValue('descripcion', res.data.descripcion)
                setValue('done', res.data.done)
            }
        }
        obtenerTarea()
    }, [])


    return (
        <div className="container mx-auto py-9 flex flex-col justify-center items-center w-full">
            <form className="w-2/3 flex justify-center flex-col" onSubmit={onSubmit}>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col items-center justify-center mb-5 w-full'>
                        <div className='flex gap-6 items-center justify-center'>

                            <label className='text-white ' htmlFor="POST-titulo">Titulo:</label>
                            <input className='mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1' placeholder='Titulo de la tarea' id="POST-titulo" type="text" name="POST-titulo" {...register("titulo", { required: true })} />
                        </div>
                        {errors.titulo && <span className="bg-red-700 text-white font-bold rounded-md p-3">Este campo es obligatorio</span>}
                    </div>

                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <div className='flex gap-3 items-center justify-center'>
                            <label className='text-white ' htmlFor="POST-descripcion">Descripción:</label>
                            <textarea
                                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                name='POST-descripcion'
                                rows="4"
                                placeholder="Escribe tu mensaje aquí..."
                                {...register("descripcion", { required: true })}
                            ></textarea>
                        </div>
                        {errors.titulo && <span className="bg-red-700 text-white font-bold rounded-md p-3">Este campo es obligatorio</span>}
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <input type="checkbox" id="done" name="done" defaultChecked={isChecked} onChange={handleChange}
                            {...register("done", {required: false})}
                        />     
                        <label className='text-white' htmlFor="done" >Realizado</label>
                    </div>
                </div >
                {params.id ? <button className=" bg-green-600 rounded-md p-3 text-white font-bold flex justify-center mx-auto mt-7 w-1/3">Actualizar Tarea</button> : <button className=" bg-gray-600 rounded-md p-3 text-white font-bold flex justify-center mx-auto mt-7 w-1/3">Crear Tarea</button> }
                
            </form>
        </div>
    )
}

export default CrearTareaComponent