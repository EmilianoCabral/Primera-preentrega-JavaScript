// juego de adivinar el numero 
/*function juegodeadivinarelnumero () {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
    let intentos = 0;
    let adivinado = false;
    console.log("¡Bienvenido al juego de adivinar el número!");
    do {
        let player1 = parseInt(prompt("Intenta adivinar el número (del 1 al 10):"));
        if (isNaN(player1) || player1 < 1 || player1 > 10) {
            console.log("Por favor, ingresa un número válido del 1 al 10.");
        } else { intentos++;
            if (player1 === numeroSecreto) {
                adivinado = true;
                console.log("Has adivinado el número en " + intentos + " intentos.");
            } else {
                console.log("Incorrecto. ¡Inténtalo de nuevo!");
            }
        }
    } while (!adivinado);
    
    console.log("¡Gracias por jugar!");
}
juegodeadivinarelnumero ();*/ 




//Segunda pre-entrega

//console.log(celulares);

function mostrarcelulares(celulares) {
    celulares.forEach (celulares => {
        console.log(
            `${celulares.marca} 
            - Modelo - ${celulares.modelo} 
            - Bateria - ${celulares.bateria} 
            - Camaras - ${celulares.camaras} 
            - Memoria ram - ${celulares.memoriaRam} 
            - Tipo de pantalla - ${celulares.tipoPantalla}   
        `);
    });
}

//mostrarcelulares(celulares);

let marca = prompt("ingresa marca");
let modelo = prompt("modelo");
let bateria = prompt("bateria");
let memoriaRam = prompt("memoria Ram");


function filtrarmarca(celulares){
    if (marca) {
            return celulares.marca === marca;
        } else {
            return celulares;
        }
    }

    function filtrarmodelo(celulares){
        if (modelo) {
                return celulares.modelo === modelo;
            } else {
                return celulares;
            }
    }

function filtrarbateria(celulares){
    if (bateria) {
            return celulares.bateria === bateria;
        } else {
            return celulares;
        }
}
function filtrarmemoriaRam(celulares){
    if (memoriaRam) {
            return celulares.memoriaRam === memoriaRam;
        } else {
            return celulares;
        }
}

function filtrocelular(){
    const resultado = celulares.filter(filtrarmarca).filter(filtrarmodelo).filter(filtrarbateria).filter(filtrarmemoriaRam);
    mostrarcelulares (resultado);
}

filtrocelular();