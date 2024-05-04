
// Manipulación del DOM - Estilos con clases de Bootstrap

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
        html.setAttribute("data-bs-theme","dark" )  // Cambia el valor del atributo data-bs-theme 
        icono.classList.replace("bi-moon-fill", "bi-sun-fill") // Cambia el icono de bootstrap 
    } else {
        html.setAttribute("data-bs-theme","light" ) 
        icono.classList.replace("bi-sun-fill", "bi-moon-fill")
    }

}

// Impresión mascotas

mascotas.forEach(mascota => {
    const {img, especie, raza, nombre, edad, peso, estado, propietario} = mascota // desestructura las propiedades del objeto mascota
    mascotasContainer.innerHTML += `
    <article class="card" style="width: 18rem;">
        <img src="${img}"
            class="card-img-top object-fit-cover" height="250px" alt="${especie} ${raza}"> 
        <ul class="list-group list-group-flush">
            <ul class="list-group-item text-capitalize fs-5"> ${nombre} </ul>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Especie:</span> ${especie} </li>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Raza:</span> ${raza}</li>
            <li class="list-group-item"><span class="fw-bold">Edad:</span> ${edad} años</li>
            <li class="list-group-item"><span class="fw-bold">Peso:</span> ${peso} kg</li>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Estado:</span> ${estado} </li>
            <li class="list-group-item text-capitalize"><span class="fw-bold">Dueño:</span> ${propietario.nombre} </li>
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
    <article class="card" style="width: 25rem;" >
        <h5 class="card-header bg-info-subtle text-info-emphasis"> ${servicio.nombre} </h5>
        <div class="card-body">
            <h6 class="card-title text-info-emphasis">Descripción:</h6>
            <p class="card-text text-info-emphasis">${servicio.descripcion}</p>
            <h6 class="card-title text-info-emphasis">Precio:</h6>
            <p class="card-text text-info-emphasis">${servicio.precio} mil pesos colombianos</p>
            <button class="btn btn-outline-primary">Deseo más información <i class="bi bi-info-circle"></i></button>
        </div>
    </article>
    `
}


