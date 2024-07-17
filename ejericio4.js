function seleccionarObjetivo(enemigo1, enemigo2) {
    let distancia1 = parseFloat(enemigo1.distancia);
    let distancia2 = parseFloat(enemigo2.distancia);
    let prioridad1 = parseInt(enemigo1.prioridad);
    let prioridad2 = parseInt(enemigo2.prioridad);

    if (prioridad1 > prioridad2) {
        return enemigo1; 
    } else if (prioridad2 > prioridad1) {
        return enemigo2; 

    } else if (prioridad1==prioridad2){
        
        if(distancia1<distancia2)
        { return distancia1}
        else if (distancia2<distancia1){
            return distancia2}
            else if(distancia1===distancia2){
                console.log("Las distancias son iguales");
            }

    }
}

while (true) {
    let enemigo1 = prompt("Introduzca el nombre del enemigo 1:");
    let disEne1 = parseFloat(prompt("Introduzca la distancia del enemigo 1:"));
    let prioridadEne1 = parseInt(prompt("Introduzca la prioridad del enemigo 1:"));

    let enemigo2 = prompt("Introduzca el nombre del enemigo 2:");
    let disEne2 = parseFloat(prompt("Introduzca la distancia del enemigo 2:"));
    let prioridadEne2 = parseInt(prompt("Introduzca la prioridad del enemigo 2:"));


    let e1 = { nombre: enemigo1, distancia: disEne1, prioridad: prioridadEne1 };
    let e2 = { nombre: enemigo2, distancia: disEne2, prioridad: prioridadEne2 };


    let objetivoSeleccionado = seleccionarObjetivo(e1, e2);

    if (objetivoSeleccionado) {
        console.log(`Atacar al enemigo seleccionado: ${objetivoSeleccionado.nombre}`);
    } else {
        console.log("No se pudo seleccionar un objetivo válido.");
    }

    
    let continuar = prompt("¿Desea continuar? Ingrese 'yes' para sí, cualquier otra tecla para no.");

    if (continuar.toLowerCase() !== 'yes') {break; }
}
