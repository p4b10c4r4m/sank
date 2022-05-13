/*let nombre = prompt("Ingrese nombre de usuario");
console.log(nombre);
let saludo = `Muchas gracias ${nombre}`;
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

let resultado = `Muchas gracias ${nombre} nos pondremos en contacto para coordinar su turno`

alert(resultado)


const paciente1 = {
    nombre: nombre,
    edad: edad, 
}*/

//array creado por el profesional medico

/*const arrayPaciente1 = [paciente1]
arrayPaciente1.push("Dosha: " + prompt(`Ingrese dosha del paciente ${nombre}`))
arrayPaciente1.push("Ficha Medica: " + prompt(`Ingrese ficha medica del paciente ${nombre}`)),
arrayPaciente1.push("Tratamiento: " + prompt(`Ingrese tratamiento medico del paciente ${nombre}`)),
console.log(arrayPaciente1)

alert(arrayPaciente1.join("\n"))*/


class ficha {
    constructor(dosha, fichaMedica, tratamiento) {
        this.dosha = dosha;
        this.fichaMedica = fichaMedica;
        this.tratamiento = tratamiento;
    }
}

let arrayPaciente1 = []
let formPaciente = document.querySelector('#formPaciente')

formPaciente.addEventListener('submit', (event) => {
    event.preventDefault()
    let dosha = document.querySelector("#idDosha").value 
    let fichaMedica = document.querySelector("#idFicha").value 
    let tratamiento = document.querySelector("#idTratamiento").value 
    
   const arrayficha = new ficha(dosha, fichaMedica, tratamiento)
   arrayPaciente1.push(arrayficha)
   console.log(arrayPaciente1)
   formPaciente.reset()
})
