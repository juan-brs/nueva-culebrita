 const tablero = document.getElementById( 'tablero' )
 const filas = 20;
 const columnas = 20;
 let culebra = [{ fila: 10, columna: 10 }];
 let direction = 'derecha';

 function inicializarTablero()
 {
    for (let fila = 0; fila < filas; fila++) {
        for (let columna = 0; columna < columnas; columna++)
        {
            const celda = document.createElement('div');
        if (!celda.classList.contains){

            celda.classList.add("celda");
        }

            tablero.appendChild(celda)
        }
    }
 }

    function dibujarCulebra() {
        tablero.innerHTML = '';

        culebra.forEach(segmento => 
            {
                const indice = 
                segmento.fila * columnas +
                segmento.columna;
                const celda =
                tablero.children[indice];

                celda.classList.add('celda')
                if (segmento === culebra[0]) {
                    celda.id = 'cabeza';
                }
            });
    }

    function moverCulebra() {
        const cabeza = Object.assign({} , culebra[0]);

        switch (direccion) {
            case 'arriba':
                cabeza.fila--;
                break;
                case 'abajo':
                    cabeza.fila++;
                    break;
                    case 'izquierda':
                    cabeza.columna--;
                    break;
                    case 'derecha':
                    cabeza.columna++;
                    break
        }

        culebra.unshift(cabeza);
        culebra.pop();
    }

    function actualizarJuego() {
        moverCulebra();
        dibujarCulebra();
    }

    function cambiarDireccion(event) {
        switch (event.key) {
            case 'ArrowUp' :
                direccion = 'arriba' ;
                break;
                case 'ArrowDown' :
                    direccion = 'abajo';
                    break;
                    case 'ArrowLeft' :
                        direccion = 'izquierda';
                        break;
                        case 'ArrowRigh' :
                            direccion = 'derecha' ;
                            break;
        }
    }

    inicializarTablero();
    dibujarCulebra();
    setInterval(actualizarJuego,500);
    document.addEventListener('keydown', cambiarDireccion);