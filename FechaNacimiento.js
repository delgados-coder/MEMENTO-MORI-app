let fechaNacimiento

function obtenerFechaActual() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');

    return `${año}-${mes}-${dia}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const fechaActual = obtenerFechaActual();
    const inputFechaNacimiento = document.getElementById('f_nac');
    if (inputFechaNacimiento) {
        inputFechaNacimiento.value = fechaActual;
    } else {
        console.error('El elemento con el ID "f_nac" no existe en el DOM');
    }

    fechaNacimiento = obtenerFecha();
    console.log(`Fecha de nacimiento obtenida: ${fechaNacimiento}`);

});

function obtenerFecha() {
    const inputFechaNacimiento = document.getElementById('f_nac');
    if (inputFechaNacimiento) {
        console.log(inputFechaNacimiento.value)
        return inputFechaNacimiento.value;
    } else {
        console.error('El elemento con el ID "f_nac" no existe en el DOM');
        return null;
    }
}
