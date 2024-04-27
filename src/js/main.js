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

let mascotas = [
    {
        nombre: "Max",
        especie: "Perro",
        raza: "Labrador Retriever",
        edad: 5,
        peso: "25",
        estado: "critico",
        propietario: {
            nombre: "Juan Pérez",
            documento: "12345678",
            telefono: "555-123-4567",
            correo: "juanperez@example.com"
        }
    },
    {
        nombre: "Luna",
        especie: "Gato",
        raza: "Siames",
        edad: 3,
        peso: "10",
        estado: "estable",
        propietario: {
            nombre: "María García",
            documento: "87654321",
            telefono: "555-987-6543",
            correo: "mariagarcia@example.com"
        }
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        raza: "Bulldog",
        edad: 2,
        peso: "20",
        estado: "critico",
        propietario: {
            nombre: "Pedro Martínez",
            documento: "13579246",
            telefono: "555-246-8024",
            correo: "pedromartinez@example.com"
        }
    },
    {
        nombre: "Coco",
        especie: "Pájaro",
        raza: "Periquito",
        edad: 1,
        peso: "0.1",
        estado: "estable",
        propietario: {
            nombre: "Ana López",
            documento: "98765432",
            telefono: "555-333-4444",
            correo: "anlopez@example.com"
        }
    },
    {
        nombre: "Simba",
        especie: "Gato",
        raza: "Persa",
        edad: 4,
        peso: "15",
        estado: "estable",
        propietario: {
            nombre: "Carlos Ramírez",
            documento: "24681357",
            telefono: "555-876-5432",
            correo: "carlosramirez@example.com"
        }
    },
    {
        nombre: "Bella",
        especie: "Perro",
        raza: "Chihuahua",
        edad: 8,
        peso: "3",
        estado: "critico",
        propietario: {
            nombre: "Laura González",
            documento: "65432198",
            telefono: "555-111-2222",
            correo: "lauragonzalez@example.com"
        }
    },
    {
        nombre: "Nemo",
        especie: "Pez",
        raza: "Pez payaso",
        edad: 2,
        peso: "0.05",
        estado: "estable",
        propietario: {
            nombre: "Roberto Díaz",
            documento: "36925814",
            telefono: "555-777-8888",
            correo: "robertodiaz@example.com"
        }
    },
    {
        nombre: "Lucky",
        especie: "Perro",
        raza: "Golden Retriever",
        edad: 6,
        peso: "30",
        estado: "estable",
        propietario: {
            nombre: "Fernanda Castro",
            documento: "78521436",
            telefono: "555-666-9999",
            correo: "fernandacastro@example.com"
        }
    },
    {
        nombre: "Milo",
        especie: "Gato",
        raza: "Maine Coon",
        edad: 2,
        peso: "12",
        estado: "estable",
        propietario: {
            nombre: "David Ruiz",
            documento: "21436587",
            telefono: "555-222-3333",
            correo: "davidruiz@example.com"
        }
    },
    {
        nombre: "Lola",
        especie: "Conejo",
        raza: "Holandés",
        edad: 1,
        peso: "2",
        estado: "critico",
        propietario: {
            nombre: "Sofía Martín",
            documento: "63254178",
            telefono: "555-444-5555",
            correo: "sofiamartin@example.com"
        }
    }
]

// Función de mostrar mascotas, recibirá un array de mascotas.
// Podremos reutilizarla más adelante para listar las mascotas filtradas por nombre o dueño.

function listarMascotas(arrayMascotas) {
    if (arrayMascotas.length === 0) {
        // Si no hay mascotas para mostrar, se le informa al usuario
        console.warn("No se encuentran mascotas registradas")
    } else {
        // console.table para que su visualización sea más adecuada
        console.table(arrayMascotas)
    }
}

// Función para obtener los datos dueño

function obtenerDatosDueño() { 

    let nombre = prompt("Nombre del dueño")
    let documento = prompt("Documento del dueño")
    let telefono = parseInt(prompt("Teléfono del dueño"))
    let correo = prompt("Correo del dueño")
    
    //Retornamos un objeto con la información del dueño
    return { nombre, documento, telefono, correo }
}

// Función para obtener todos los datos de la mascota
function obtenerDatosMascota() {

    let nombre = prompt("Ingrese el nombre de la mascota") 
    let especie = prompt("Ingrese la especie de la mascota") 
    let raza = prompt("Ingrese la raza de la mascota") 
    let fecha = parseInt(prompt("Ingrese el año de nacimiento de la mascota"))
    let edad = new Date().getFullYear() - fecha
    let peso = prompt("Ingrese el peso de la mascota") 
    let estado = prompt("Ingrese el estado de la mascota") 
        
    // Retornamos un objeto con toda la información recolectada
    return {nombre, especie, raza, edad, peso, estado}

}

function agregarMascota(arrayMascotas) {
    let mascota = obtenerDatosMascota()
    let propietario = obtenerDatosDueño()
    mascota.propietario = propietario
    arrayMascotas.push(mascota)
    console.log(`La mascota ${mascota.nombre} de ${mascota.propietario.nombre} fue agregada satisfactoriamente`)
}

