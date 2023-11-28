// juego de adivinar el numero 
function juegodeadivinarelnumero () {
    
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
                console.log(`¡Correcto! Has adivinado el número en ${intentos} intentos.`);
            } else {
                console.log("Incorrecto. ¡Inténtalo de nuevo!");
            }
        }
    } while (!adivinado);
    
    console.log("¡Gracias por jugar!");

}

juegodeadivinarelnumero ();