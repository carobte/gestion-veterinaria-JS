
// Manipulación del DOM.

const main = document.querySelector("main")
const mascotasContainer = document.getElementById("mascotas")
const propietariosContainer = document.getElementById("propietarios")
const html = document.querySelector("html")
const serviciosContainer = document.getElementById("servicios")


// Cambio de tema

function cambiarTema() {
    const tema = html.getAttribute("data-bs-theme")
    const icono = document.getElementById("cambiar-tema")

    if (tema === "light"){
        html.setAttribute("data-bs-theme","dark" ) 
        icono.classList.replace("bi-moon-fill", "bi-sun-fill")
    } else {
        html.setAttribute("data-bs-theme","light" ) 
        icono.classList.replace("bi-sun-fill", "bi-moon-fill")
    }

}

// Impresión mascotas

mascotas.forEach(mascota => {
    mascotasContainer.innerHTML += `
    <article class="card" style="width: 18rem;">
        <img src="${mascota.img}"
            class="card-img-top object-fit-cover" height="300px" alt="${mascota.especie} ${mascota.raza}"> 
        <ul class="list-group list-group-flush">
            <ul class="list-group-item text-capitalize fs-5"> ${mascota.nombre} </ul>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Especie:</span> ${mascota.especie} </li>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Raza:</span> ${mascota.raza}</li>
            <li class="list-group-item"><span class="fw-bold">Edad:</span> ${mascota.edad} años</li>
            <li class="list-group-item"><span class="fw-bold">Peso:</span> ${mascota.peso} kg</li>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Estado:</span> ${mascota.estado} </li>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Dueño:</span> ${mascota.propietario.nombre} </li>
        </ul>
    </article> 
    `
})

// Impresión propietarios 

for (let i = 0; i < mascotas.length; i++) {
    const propietario = mascotas[i].propietario
    propietariosContainer.innerHTML += `
    <article class="card p-4" style="width: 20rem;">
        <h5 class="card-title text-capitalize">${propietario.nombre} </h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="fw-bold">Documento: </span>${propietario.documento}</li>
            <li class="list-group-item"><span class="fw-bold">Teléfono: </span>${propietario.telefono}</li>
            <li class="list-group-item"><span class="fw-bold">Correo: </span>${propietario.correo}</li>
        </ul>
    </article>
    `
}

// Impresión servicios

for (let i = 0; i < servicios.length; i++) {
    const servicio = servicios[i]
    serviciosContainer.innerHTML += `
    <article class="card w-25" >
        <h5 class="card-header bg-info-subtle text-info-emphasis"> ${servicio.nombre} </h5>
        <div class="card-body">
        <h6 class="card-title text-info-emphasis">Descripción:</h6>
        <p class="card-text text-info-emphasis">${servicio.descripcion}</p>
        <button class="btn btn-outline-primary">Deseo más información <i class="bi bi-info-circle"></i></button>
        </div>
    </article>
    `
    
}
