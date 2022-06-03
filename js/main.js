class Ficha {
    constructor(nombre, dosha) {
        this.nombre = nombre;
        this.dosha = dosha;

    }
}

let arrayPaciente1 = []

document.getElementById("confirmaFicha").addEventListener("click", () => {
    let nombre = document.querySelector("#idNombre").value
    let dosha = document.querySelector("#idDosha").value

    const arrayficha = new Ficha(nombre, dosha)
    arrayPaciente1.push(arrayficha)
    localStorage.setItem("dataPaciente", JSON.stringify(arrayPaciente1))
});

doshaPaciente = JSON.parse(localStorage.getItem("dataPaciente"))
console.log(doshaPaciente)






let sutraVata = ["La longevidad requiere lentitud", "Al tocar la piel tocamos la mente" , "El silencio es un ayuno mental ideal", "Vamos despacio porque vamos lejos", "El que mira afuera sueña, el que mira adentro despierta"]

let sutraPitta = ["Contestar al día siguiente","El que pega para enseñar, está enseñando a pegar","La gente no es una posesión de nadie","Abandonar la necesidad de controlar las cosas","No miran tus ojos sino tus pensamientos","Gobernando no trates de controlar","El cuerpo absorbe los pensamientos","El otro tiene razón"]

let sutraKapha = ["Si pasó conviene","La seguridad es un peso que impide caminar","Amar es agarrar con la mano abierta","Aprender es cambiar de opinión","La memoria mata la inocencia","Encontrar la paz de una mente que no es prisionera de su pasado","No hacer más de lo mismo y pretender que dé distintos resultados","Soltar, olvidar y dejar","Toda estructura es inestable"]


document.querySelector(`#sutras`).addEventListener('click', () => {
    Toastify({
        text: sutraKapha[sutraKapha.length * Math.random () | 0], 
        duration: 3000,
        destination: "",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})


//inicio calendario

fetch('../json/turnos.json')
.then(response => response.json())
.then(turnos => {

    turnos.forEach(turno => {
      divTurnos.innerHTML += `
      <div class="card row" id="turno${turno.id}">
      <div class="card-body">
        <h5 class="card-title">Dia: ${turno.dia}</h5>
        <p class="card-text">Hora: ${turno.hora}</p>
        <button id="boton${turno.id}" class="btn btn-primary">Reservar Turno</button>
      </div>
    </div>
      `  
    });
})

fetch('../json/turnos.json')
.then(response => response.json())
.then(turnos => {
    turnos.forEach((turno) => {
        document.querySelector(`#boton${turno.id}`).addEventListener('click', () => {
            Swal.fire({
                title: '¿Confirma Turno Consulta Ayurveda?',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Confirmo!',
                denyButtonText: `Don't save`,
            })
        })
    })
})



const turnos = async () => {
    let promesa = await fetch('turnos.json')
    let productos = await promesa.json()

    return turnos
}
turnos().then(turno => console.log(turno))




