fechaNacimiento = "2003-06-05"
const edad_maxima = 90;
const semanas_por_anio = 52;

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function actualizarEstadisticas() {
    const edad = calcularEdad(fechaNacimiento);
    const semanas_totales = edad_maxima * semanas_por_anio;
    const semanas_vividas = edad * semanas_por_anio;
    const anios_vividos = edad;
    const anios_restantes = edad_maxima - edad;

    document.querySelector('.p-semanas').textContent = `Llevas vivido ${semanas_vividas} semanas de ${semanas_totales}.`;
    document.querySelector('.p-anios').textContent = `Llevas vivido ${anios_vividos} años de ${edad_maxima}.`;
}

function mostrarFraseAleatoria() {
    const fraseAleatoria = frasesMementoMori[Math.floor(Math.random() * frasesMementoMori.length)];
    const subtituloElement = document.querySelector('.header .subtitulo');
    subtituloElement.textContent = fraseAleatoria;
}

function crearGraficoSemanas() {
    const edad = calcularEdad(fechaNacimiento);
    const semanas_totales = edad_maxima * semanas_por_anio;
    const semanas_vividas = edad * semanas_por_anio;

    for (let i = 0; i < semanas_totales; i++) {
        const div = document.createElement('div');
        div.className = 'semana-no-vivida';
        if (i < semanas_vividas) {
            div.classList.add('semana-vivida');
        }
        document.querySelector('.semanas-vividas').appendChild(div);
        if ((i + 1) % 26 === 0 && (i + 1) % 52 !== 0) {
            const separador_v = document.createElement('div');
            separador_v.className = 'separador-v';
            document.querySelector('.semanas-vividas').appendChild(separador_v);
        }

        if ((i + 1) % semanas_por_anio === 0) {
            const semanas_label = document.createElement('div');
            semanas_label.className = 'semanas-label';
            semanas_label.textContent = ((i + 1) / semanas_por_anio) + "";
            document.querySelector('.semanas-vividas').appendChild(semanas_label);
            if ((i + 1) % (10 * semanas_por_anio) === 0) {
                const separador_h = document.createElement('div');
                separador_h.className = 'separador-h';
                document.querySelector('.semanas-vividas').appendChild(separador_h);
            }
        }
    }
}

function crearBarraDeProgreso() {
    const edad = calcularEdad(fechaNacimiento);
    const semanas_totales = edad_maxima * semanas_por_anio;
    const semanas_vividas = edad * semanas_por_anio;
    const porcentajeCompletado = (semanas_vividas / semanas_totales) * 100;

    const barraProgresoElement = document.querySelector('.barra_progreso');
    const porcentajeProgresoElement = document.querySelector('.porcentaje_progreso');

    barraProgresoElement.innerHTML = '';
    porcentajeProgresoElement.innerHTML = parseFloat(porcentajeCompletado).toFixed(2) + "%"

    const divsCompletos = Math.floor(porcentajeCompletado);
    const divsIncompletos = 100 - divsCompletos;

    for (let i = 0; i < divsCompletos; i++) {
        const divCompletado = document.createElement('div');
        divCompletado.className = 'porcentaje_completo';
        barraProgresoElement.appendChild(divCompletado);

        if ((i + 1) % 10 === 0 && (i + 1) !== 100) {
            const divSeparador = document.createElement('div');
            divSeparador.className = 'separadorporcentaje';
            barraProgresoElement.appendChild(divSeparador);
        }
    }

    for (let i = 0; i < divsIncompletos; i++) {
        const divIncompleto = document.createElement('div');
        divIncompleto.className = 'porcentaje_incompleto';
        barraProgresoElement.appendChild(divIncompleto);

        if ((divsCompletos + i + 1) % 10 === 0 && (divsCompletos + i + 1) !== 100) {
            const divSeparador = document.createElement('div');
            divSeparador.className = 'separadorporcentaje';
            barraProgresoElement.appendChild(divSeparador);
        }
    }
}

mostrarFraseAleatoria();
actualizarEstadisticas();
crearBarraDeProgreso();
crearGraficoSemanas();
