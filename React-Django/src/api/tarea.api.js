import axios from 'axios'

export const getTodasLasTareas = () => {
    return axios.get("http://127.0.0.1:8000/tareas/api/v1/tareas/")
}

export const getUnaTarea = id => {
    return axios.get(`http://127.0.0.1:8000/tareas/api/v1/tareas/${id}`)
}

export const crearTareas = (tarea) => {
    return axios.post("http://127.0.0.1:8000/tareas/api/v1/tareas/", tarea)
}

export const eliminarTarea = (id) => {
    return axios.delete(`http://127.0.0.1:8000/tareas/api/v1/tareas/${id}`)
}

export const editarTarea = (id, tarea) => {
    return axios.put(`http://127.0.0.1:8000/tareas/api/v1/tareas/${id}/`, tarea)
}