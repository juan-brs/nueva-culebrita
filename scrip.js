const tablero = document.getElementById('tablero')
const filas = 20;
const columnas = 20;
let culebra = [{ fila: 10, columna: 10 }];
let comida = [{ fila: 0, columna: 0 }];
let direction = 'stoped';

document.addEventListener("DOMContentLoaded", inicializarTablero);
document.addEventListener("DOMContentLoaded", dibujarCulebra);
document.addEventListener("DOMContentLoaded", dibujarComida);
document.addEventListener('keydown', cambiarDireccion);

const playGame = () => {
    setInterval(actualizarJuego, 500);
}



function inicializarTablero() {
    for (let fila = 0; fila < filas; fila++) {
        for (let columna = 0; columna < columnas; columna++) {
            const celda = document.createElement('div');

            celda.classList.add("celda");

            tablero.appendChild(celda)
        }
    }
}

function dibujarCulebra() {
    culebra.forEach(segmento => {
        const indice =
            segmento.fila * columnas +
            segmento.columna;
        const celda =
            tablero.children[indice];

        celda.classList.add('celda')
        if (segmento === culebra[0]) {
            celda.classList.add('cabeza')
        }
    });
}

function dibujarComida() {
    comida.forEach(segmento => {
        const indice =
            segmento.fila * columnas +
            segmento.columna;
        const celda =
            tablero.children[indice];

        celda.classList.add('comida')
        if (segmento === comida[0]) {
            celda.classList.add('comidita')
        }
    });
}

function moverCulebra() {
    const cabeza = Object.assign({}, culebra[0]);

    if (direction === 'stoped') {
        return
    }
    if (direction === 'arriba') {
        cabeza.fila--;
    }

    if (direction === 'abajo') {
        cabeza.fila++;
    }

    if (direction === 'izquierda') {
        cabeza.columna++;
    }

    if (direction === 'derecha') {
        cabeza.columna--;
    }

    // Calcula el índice antes y después de la actualización de la posición
    const indiceActual = culebra[0].fila * columnas + culebra[0].columna;
    const nuevoIndice = cabeza.fila * columnas + cabeza.columna;

    culebra.unshift(cabeza);
    culebra.pop();

    // Asegúrate de que estás utilizando el índice correcto al eliminar la clase 'celda'
    tablero.children[indiceActual].classList.remove('cabeza');
    tablero.children[nuevoIndice].classList.add('cabeza');
    // Agrega la clase 'celda' a la nueva posición

    console.log({ culebra })
}



function actualizarJuego() {
    moverCulebra();
}

function cambiarDireccion(event) {
    switch (event.keyCode) {
        case 38:
            direction = 'arriba';
            break;
        case 40:
            direction = 'abajo';
            break;
        case 39:
            direction = 'izquierda';
            break;
        case 37:
            direction = 'derecha';
            break;
    }

}

playGame()

