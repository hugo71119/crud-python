import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex justify-around p-3 text-xl bg-blue-600 font-bold text-white">
          <Link to="/">Inicio</Link>
          <Link to="/vertareas">Ver Tareas</Link>
          <Link to="/creartareas">Crear Tareas</Link>
    </nav>
  )
}
