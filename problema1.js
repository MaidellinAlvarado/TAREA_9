

let enemyA = prompt("Ingresa la distancia del primer enemigo");
let enemyB = prompt("Ingresa la distancia del segundo enemigo");

let puntoA=parseFloat(enemyA);// pasar las entradas a numeros.
let puntoB=parseFloat(enemyB);

if (isNaN(puntoA) || isNaN(puntoB)) {
    console.log("Por favor, ingresa distancias válidas."); // si ingresa datos invalidos
}

else{

    if (puntoA < puntoB) {
        console.log(`El enemigo más cercano es ${puntoA}`);
    } else if (puntoB < puntoA) {
        console.log(`El enemigo más cercano es ${puntoB}`);
    } else {
        console.log("Parece que los dos estan a la misma distancia uno del otro.");
    }


}