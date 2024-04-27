// Saludo de bienvenida, nos ayuda también a verificar que los archivos estén conectados adecuadamente.

console.log("Bienvenido a la veterinaria Riwi")

/* let opcion = parseInt(prompt(`Ingresa una de las siguientes opciones:

1. Ver mascotas registradas
2. Registrar una nueva mascota
3. Ver lista de dueños
4. Buscar mascota por nombre
5. Buscar mascotas pertenecientes al mismo dueño
6. Actualizar información de una mascota
7. Eliminar una mascota
0. Salir`

)) */

// Array inicial de las mascotas con los datos requeridos.

let mascotas = [
    {
        nombre: "max",
        especie: "perro",
        raza: "labrador retriever",
        edad: 5,
        peso: "25",
        estado: "critico",
        propietario: {
            nombre: "juan perez",
            documento: "12345678",
            telefono: "555-123-4567",
            correo: "juanperez@example.com"
        }
    },
    {
        nombre: "luna",
        especie: "gato",
        raza: "siames",
        edad: 3,
        peso: "10",
        estado: "estable",
        propietario: {
            nombre: "maria garcia",
            documento: "87654321",
            telefono: "555-987-6543",
            correo: "mariagarcia@example.com"
        }
    },
    {
        nombre: "rocky",
        especie: "perro",
        raza: "bulldog",
        edad: 2,
        peso: "20",
        estado: "critico",
        propietario: {
            nombre: "pedro martinez",
            documento: "13579246",
            telefono: "555-246-8024",
            correo: "pedromartinez@example.com"
        }
    },
    {
        nombre: "coco",
        especie: "pajaro",
        raza: "periquito",
        edad: 1,
        peso: "0.1",
        estado: "estable",
        propietario: {
            nombre: "ana lopez",
            documento: "98765432",
            telefono: "555-333-4444",
            correo: "anlopez@example.com"
        }
    },
    {
        nombre: "simba",
        especie: "gato",
        raza: "persa",
        edad: 4,
        peso: "15",
        estado: "estable",
        propietario: {
            nombre: "carlos ramirez",
            documento: "24681357",
            telefono: "555-876-5432",
            correo: "carlosramirez@example.com"
        }
    },
    {
        nombre: "bella",
        especie: "perro",
        raza: "chihuahua",
        edad: 8,
        peso: "3",
        estado: "critico",
        propietario: {
            nombre: "laura gonzalez",
            documento: "65432198",
            telefono: "555-111-2222",
            correo: "lauragonzalez@example.com"
        }
    },
    {
        nombre: "nemo",
        especie: "pez",
        raza: "pez payaso",
        edad: 2,
        peso: "0.05",
        estado: "estable",
        propietario: {
            nombre: "roberto diaz",
            documento: "36925814",
            telefono: "555-777-8888",
            correo: "robertodiaz@example.com"
        }
    },
    {
        nombre: "lucky",
        especie: "perro",
        raza: "golden retriever",
        edad: 6,
        peso: "30",
        estado: "estable",
        propietario: {
            nombre: "fernanda castro",
            documento: "78521436",
            telefono: "555-666-9999",
            correo: "fernandacastro@example.com"
        }
    },
    {
        nombre: "milo",
        especie: "gato",
        raza: "maine coon",
        edad: 2,
        peso: "12",
        estado: "estable",
        propietario: {
            nombre: "david ruiz",
            documento: "21436587",
            telefono: "555-222-3333",
            correo: "davidruiz@example.com"
        }
    },
    {
        nombre: "lola",
        especie: "conejo",
        raza: "holandes",
        edad: 1,
        peso: "2",
        estado: "critico",
        propietario: {
            nombre: "sofia martin",
            documento: "63254178",
            telefono: "555-444-5555",
            correo: "sofiamartin@example.com"
        }
    }
]

// Función de listar información, recibirá un array de mascotas o de dueños.
// Podremos reutilizarla más adelante para listar las mascotas filtradas por nombre o dueño y para listar los dueños.

function listar(array, info) {
    if (array.length === 0) {
        // Si no hay información para mostrar, se le informa al usuario
        console.warn(`No se encuentra la información de ${info} registrada`)
    } else {
        // console.table para que su visualización sea más adecuada
        console.table(array)
    }
}

// Función para obtener los datos dueño

function obtenerDatosDueño() { 

    let nombre = prompt("Nombre del dueño").toLowerCase()
    let documento = prompt("Documento del dueño").toLowerCase()
    let telefono = parseInt(prompt("Teléfono del dueño"))
    let correo = prompt("Correo del dueño").toLowerCase()
    
    //Retornamos un objeto con la información del dueño
    return { nombre, documento, telefono, correo }
}

// Función para obtener todos los datos de la mascota

function obtenerDatosMascota() {

    let nombre = prompt("Ingrese el nombre de la mascota").toLowerCase()
    let especie = prompt("Ingrese la especie de la mascota").toLowerCase()
    let raza = prompt("Ingrese la raza de la mascota").toLowerCase() 
    let fecha = parseInt(prompt("Ingrese el año de nacimiento de la mascota"))
    let edad = new Date().getFullYear() - fecha
    let peso = prompt("Ingrese el peso de la mascota").toLowerCase() 
    let estado = prompt("Ingrese el estado de la mascota").toLowerCase()
        
    // Retornamos un objeto con toda la información recolectada
    return {nombre, especie, raza, edad, peso, estado}
}

// Función para agregar mascotas, recibe el array donde se va a agregar

function agregarMascota() {
    // Obtener la información que requerimos
    let mascota = obtenerDatosMascota()
    let propietario = obtenerDatosDueño()
    // Le pasamos la información del propietario a la mascota
    mascota.propietario = propietario
    // Enviamos la información de la mascota al array
    mascotas.push(mascota)
    console.log(`La mascota ${mascota.nombre} de ${mascota.propietario.nombre} fue agregada satisfactoriamente`)
}

// Función para listar los dueños

function listarDueños() {
    // Primero obtenemos solo la información de los dueños registrados
    let dueños = mascotas.map(mascota => {
        return mascota.propietario
    })
    // Listamos la información del array de dueños registrados
    listar(dueños, "dueños")
}

// Función para obtener mascotas de un dueño

function obtenerMascotasDueños() {
    // Primero obtenemos el dueño que se quiere buscar
    let dueño = prompt("Ingresa el nombre del dueño que deseas verificar")
    // Obtenemos el array de mascotas de ese dueño específico
    let mascotasDueños = mascotas.filter (mascota => {
        return mascota.propietario.nombre === dueño
    })
    // Listamos el array de mascotas de un dueño específico
    listar(mascotasDueños, dueño)
}

// Función para buscar una mascota por su nombre

function obtenerMascotaNombre() {
    let mascotaBuscar = prompt("Ingresa el nombre de la mascota que deseas buscar")
    let mascotaEncontrada = mascotas.filter(mascota => {
        return mascota.nombre === mascotaBuscar
    })
    listar(mascotaEncontrada, mascotaBuscar)
}

// Función para eliminar una mascota por su nombre

function eliminarMascotaNombre() {
    let mascotaBuscar = prompt("Ingresa el nombre de la mascota que deseas eliminar")
    mascotas = mascotas.filter(mascota => {
        return mascota.nombre !== mascotaBuscar
    })
    console.log(`${mascotaBuscar} ha sido eliminada satisfactoriamente`)
}
