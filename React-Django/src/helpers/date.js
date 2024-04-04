// Función para formatear la fecha
export function formatearFecha(fechaStr) {
    // Crear un objeto Date a partir de la cadena de fecha
    const fecha = new Date(fechaStr);

    // Array de nombres de meses en español
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Obtener el día, mes y año de la fecha
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    // Construir la cadena de fecha formateada
    const fechaFormateada = `${dia + 1} de ${mes} del ${año}`;

    return fechaFormateada;
}

// Ejemplo de uso
const fechaOriginal = "2024-04-07";
const fechaFormateada = formatearFecha(fechaOriginal);
console.log(fechaFormateada); // Resultado: "3 de Abril del 2024"
