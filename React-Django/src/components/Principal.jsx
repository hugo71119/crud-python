import {Link} from 'react-router-dom'

export default function Principal() {
  return (
    <div>
        <h1 className="text-white text-5xl text-center mt-10">Bienvenido a tu gestor de tareas</h1>
        <p className="text-white text-2xl text-center py-10">¿Qué quieres hacer hoy?</p>

        <div className="flex justify-center gap-5">
            <Link to="/vertareas">
                <button to="https://www.youtube.com/" className="bg-yellow-300 rounded-md p-3">Ver Tareas</button>
            </Link>
            <Link to="/creartareas">
                <button className="bg-green-500 rounded-md p-3">Crear Tareas</button>
            </Link>
        </div>
    </div>
  )
}
