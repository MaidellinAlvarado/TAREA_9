function seleccionarObjetivo(enemigo1, enemigo2) {
    let distancia1 = parseFloat(enemigo1.distancia);
    let distancia2 = parseFloat(enemigo2.distancia);




    if (distancia1 < distancia2) {
        return enemigo1; 
    } else if (distancia2 < distancia1) {
        return enemigo2; 
    } else {
        return console.log("Los dos estan a la misma distancia elegire el Numero 1"+enemigo1.nombre); }

}


while (true) {

//entradas

let enemigo1 = { nombre: "Enemigo 1", distancia: "10" };
let enemigo2 = { nombre: "Enemigo 2", distancia: "8" };




let masCercano = seleccionarObjetivo(enemigo1, enemigo2);


console.log(`Atacar al enemigo más cercano: ${masCercano.nombre}`);


if (!masCercano) {
    console.log("Aqui termina el programa");
    break;
}


}
