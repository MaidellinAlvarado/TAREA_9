

function seleccionarObjetivo(enemigo1, enemigo2) {
    let distancia1 = parseFloat(enemigo1.distancia);
    let distancia2 = parseFloat(enemigo2.distancia);

    if (distancia1 < distancia2) {
        return enemigo1; 
    } else if (distancia2 < distancia1) {
        return enemigo2; 
    } else {
        return null; 
    }
}


while(true){
let enemigo1 = prompt("Introduzca el nombre enemigo 1:");

let disEne1 = prompt("Introduzca la distancia:");

let enemigo2 = prompt("Introduzca el nombre enemigo 2:");
let disEn2 = prompt("Introduzca la distancia:");


let e1= { nombre: enemigo1, distancia: diEne1 };
let e2 = { nombre: enemigo2, distancia: disEne2 };

let cercano= seleccionarObjetivo(e1, e2);

if (cercano) {
    console.log(`Atacar al enemigo más cercano: ${cercano.nombre}`);
} else {
    console.log("Los dos enemigos están a la misma distancia o las entradas no son válidas.");
}


let continuar = prompt("¿Desea continuar? Ingrese 'yes' para sí, cualquier otra tecla para no.");

if (continuar.toLowerCase() !== 'yes') {
    break; 
}
}