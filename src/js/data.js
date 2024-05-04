// Array inicial de las mascotas con los datos requeridos.

let mascotas = [
    {
        nombre: "max",
        especie: "perro",
        raza: "labrador retriever",
        edad: 5,
        peso: "25",
        estado: "critico",
        img: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09labrador.jpg?itok=Xab_MZwK",
        propietario: {
            nombre: "juan perez",
            documento: "12345678",
            telefono: "555-123-4567",
            correo: "juanperez@example.com"
        }
    },
    {
        nombre: "scooby",
        especie: "perro",
        raza: "gran danes",
        edad: 3,
        peso: "10",
        estado: "estable",
        img:"https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Great-Dane.jpg?itok=zc4jIyCU",
        propietario: {
            nombre: "maria garcia",
            documento: "87654321",
            telefono: "555-987-6543",
            correo: "mariagarcia@example.com"
        }
    },
    {
        nombre: "pistacho",
        especie: "perro",
        raza: "bulldog",
        edad: 2,
        peso: "20",
        estado: "critico",
        img: "https://cdn.shopify.com/s/files/1/0799/5301/files/blog_8014fc80-8fc7-47b5-9210-c834642fd40a_1024x1024.jpg?v=1648818287",
        propietario: {
            nombre: "pedro martinez",
            documento: "13579246",
            telefono: "555-246-8024",
            correo: "pedromartinez@example.com"
        }
    },
    {
        nombre: "coco",
        especie: "perro",
        raza: "pomerania",
        edad: 1,
        peso: "2",
        estado: "estable",
        img: "https://www.bunko.pet/__export/1661988965226/sites/debate/img/2022/08/31/pomerania_blanco.jpg_1902800913.jpg",
        propietario: {
            nombre: "ana maria lopez",
            documento: "98765432",
            telefono: "555-333-4444",
            correo: "anamalopez@example.com"
        }
    },
    {
        nombre: "shadow",
        especie: "perro",
        raza: "dogo argentino",
        edad: 4,
        peso: "15",
        estado: "estable",
        img:"https://www.worldlifeexpectancy.com//images/a/d/d/b/dogo_argentino/dogo_argentino_1.webp",
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
        img: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Chihuahua20smooth20coat.jpg?itok=M0z5cV0g",
        propietario: {
            nombre: "laura gonzalez",
            documento: "65432198",
            telefono: "555-111-2222",
            correo: "lauragonzalez@example.com"
        }
    },
    {
        nombre: "Wolfy",
        especie: "perro",
        raza: "husky",
        edad: 2,
        peso: "0.05",
        estado: "estable",
        img:"https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-08Siberian20Husky1.jpg?itok=8DnhAzfy",
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
        img: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2023/10/24/653782e222552.jpeg",
        propietario: {
            nombre: "fernanda castro",
            documento: "78521436",
            telefono: "555-666-9999",
            correo: "fernandacastro@example.com"
        }
    },
    {
        nombre: "milo",
        especie: "perro",
        raza: "border collie",
        edad: 2,
        peso: "12",
        estado: "estable",
        img: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0018_border_collie.jpg",
        propietario: {
            nombre: "david alejandro ruiz",
            documento: "21436587",
            telefono: "555-222-3333",
            correo: "davidalejoruiz@example.com"
        }
    },
    {
        nombre: "lola",
        especie: "perro",
        raza: "dalmata",
        edad: 1,
        peso: "2",
        estado: "critico",
        img: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09dalmatian.jpg?itok=9j09HbZJ",
        propietario: {
            nombre: "sofia martin",
            documento: "63254178",
            telefono: "555-444-5555",
            correo: "sofiamartin@example.com"
        }
    }
]

let servicios = [
    {
        nombre: "Consulta General",
        precio: 50.000,
        descripcion: "Una revisión completa de la salud de la mascota, incluyendo examen físico, consejos de cuidado y recomendaciones de vacunación."
    },
    {
        nombre: "Paquete de vacunación básica",
        precio: 70.000,
        descripcion: "Incluye vacunas esenciales para prevenir enfermedades comunes en mascotas, como la rabia, moquillo, parvovirus, entre otras."
    },
    {
        nombre: "Esterilización/Castración",
        precio: 450.000,
        descripcion: "Cirugía para esterilizar a las mascotas, lo que ayuda a controlar la población y reduce el riesgo de ciertas enfermedades y comportamientos no deseados. "
    },
    {
        nombre: "Limpieza dental profesional",
        precio: 100.000,
        descripcion: "Eliminación de placa y sarro de los dientes de la mascota, ayudando a prevenir enfermedades periodontales y promoviendo una buena salud bucal."
    },
    {
        nombre: "Consulta con etólogo",
        precio: 200.000,
        descripcion: "Evaluación y asesoramiento para abordar problemas de comportamiento en mascotas, como la agresividad, ansiedad por separación, etc."
    },
    {
        nombre: "Grooming profesional",
        precio: 40.000,
        descripcion: "Baño, corte de pelo y cuidado estético para mantener la apariencia y salud de la mascota, incluyendo recorte de uñas y limpieza de oídos."
    }
];
