/* Programa de calculadora
numero
numero
operación
resultado
<calcular>
*/
function sumar(){
    var1 = parseInt(document.getElementById('numero-1').value);
    var2 = parseInt(document.getElementById('numero-2').value);
    document.getElementById('resultado').innerHTML = var1+var2;

}

function restar(){
    var1 = parseInt(document.getElementById('numero-1').value);
    var2 = parseInt(document.getElementById('numero-2').value);
    document.getElementById('resultado').innerHTML = var1-var2;

}

function multiplicar(){
    var1 = parseInt(document.getElementById('numero-1').value);
    var2 = parseInt(document.getElementById('numero-2').value);
    document.getElementById('resultado').innerHTML = var1*var2;

}

function dividir(){
    var1 = parseInt(document.getElementById('numero-1').value);
    var2 = parseInt(document.getElementById('numero-2').value);
    document.getElementById('resultado').innerHTML = var1/var2;

}


/* Programa de tabla
tabla
Tipo (Ascendente o descendiente)
longitud
(Resultado)
<ver tabla> */

function calcularTabla() {
    let numero = parseInt(document.getElementById("Tabla").value);
    let lista_tabla  = document.getElementById("tabla");
    lista_tabla.innerHTML = "";
    for (let index = 1; index <= 10; index++) {
        lista_tabla.innerHTML += `<li>${numero} * ${index} = ${numero * index}</li>`;
    }
}