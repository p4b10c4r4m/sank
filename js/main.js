let dosha = "";

let sutraVata = ["La longevidad requiere lentitud", "Al tocar la piel tocamos la mente", "El silencio es un ayuno mental ideal", "Vamos despacio porque vamos lejos", "El que mira afuera sueña, el que mira adentro despierta"];

let sutraPitta = ["Contestar al día siguiente", "El que pega para enseñar, está enseñando a pegar", "La gente no es una posesión de nadie", "Abandonar la necesidad de controlar las cosas", "No miran tus ojos sino tus pensamientos", "Gobernando no trates de controlar", "El cuerpo absorbe los pensamientos", "El otro tiene razón"];

let sutraKapha = ["Si pasó conviene", "La seguridad es un peso que impide caminar", "Amar es agarrar con la mano abierta", "Aprender es cambiar de opinión", "La memoria mata la inocencia", "Encontrar la paz de una mente que no es prisionera de su pasado", "No hacer más de lo mismo y pretender que dé distintos resultados", "Soltar, olvidar y dejar", "Toda estructura es inestable"];


document.querySelector(`#sutras`).addEventListener('click', () => {
    dosha = document.querySelector("#idDosha").value
    switch (dosha) {
        case "Vata":
            vata()
            break
        case "Pitta":
            pitta()
            break
        case "Kapha":
            kapha()
            break
        default:
            Swal.fire('Por favor seleccioná tu Dosha para recibir Sutras')
    } 
});

function vata() {
    Toastify({
        text: sutraVata[sutraVata.length * Math.random() | 0],
        duration: 3000,
        destination: "",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #005f73, #0a9396)",
        },
        onClick: function () {} // Callback after click
    }).showToast();
};

function pitta() {
    Toastify({
        text: sutraPitta[sutraPitta.length * Math.random() | 0],
        duration: 3000,
        destination: "",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #f94144, #f3722c)",
        },
        onClick: function () {} // Callback after click
    }).showToast();
};


function kapha() {
    Toastify({
        text: sutraKapha[sutraKapha.length * Math.random() | 0],
        duration: 3000,
        destination: "",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #90be6d, #43aa8b)",
        },
        onClick: function () {} // Callback after click
    }).showToast();
};


//inicio calendario


class Turno {
    constructor(id, dia, hora) {
        this.id = id;
        this.dia = dia;
        this.hora = hora;
    }
}

let arrayTurno = []


fetch('../json/turnos.json')
    .then(response => response.json())
    .then(turnos => {

        turnos.forEach(turno => {
            divTurnos.innerHTML += `
      <div class="card card-" id="turno${turno.id}">
      <div class="card-body">
        <h5 class="card-title">Dia: ${turno.dia}</h5>
        <p class="card-text">Hora: ${turno.hora}</p>
        <button id="boton${turno.id}" class="btn btn-primary">Reservar Turno</button>
      </div>
    </div>
      `
        });
        turnos.forEach((turno) => {
            document.querySelector(`#boton${turno.id}`).addEventListener('click', () => {
                Swal.fire({
                    title: '¿Confirma Turno Consulta Ayurveda?',
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: 'Confirmo!',
                    denyButtonText: `Don't save`,
                }).then((respuesta) => {
                    if (respuesta.isConfirmed) {
                        location.href = "reserva.html"
                    }
                })
            })
        });

        turnos.forEach((turno) => {
            document.querySelector(`#boton${turno.id}`).addEventListener('click', () => {
                let id = turno.id
                let dia = turno.dia
                let hora = turno.hora

                const arrayReserva = new Turno(id, dia, hora)
                arrayTurno.push(arrayReserva)
                localStorage.setItem("Reserva", JSON.stringify(arrayTurno))
            })
        })
    });

/*let reservaa = JSON.parse(localStorage.getItem("Reserva"));
document.getElementById("turnoReservado").innerHTML = "reservaa";*/



