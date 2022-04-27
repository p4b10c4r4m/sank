let nombre = prompt("Ingrese nombre de usuario");
console.log(nombre);
let saludo = "Muchas gracias " + nombre;
alert(saludo)

let edad = parseInt(prompt("Ingrese su edad"));
while (isNaN(edad)) {
    edad = parseInt(prompt("Por favor ingrese su edad en formato numerico"));
}

let terapia = true

while(terapia){
    let seleccion = prompt("Por favor seleccione la terapia Ayurveda que desea consultar: Consulta Medica Ayurveda tipee A, Masajes tipee M, Cursos tipee C").toLowerCase();

    if(seleccion == "a" || seleccion == "m" || seleccion == "c"){
        terapia = false
    }
}

let resultado = "Muchas gracias " + nombre + " nos pondremos en contacto para coordinar su turno"

alert(resultado)