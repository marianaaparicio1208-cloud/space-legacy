// Lista de equipos que exploraron el espacio
const equipos = [
    {
        nombre: "Módulo Lunar Apolo 11",
        año: "1969",
        descripcion: "Fue el vehículo que permitió a los astronautas Neil Armstrong y Buzz Aldrin llegar a la superficie de la Luna.",
        ubicacion: "moon",
        estado: "Estado: Retirado"
    },
    {
        nombre: "Vehículo Lunar Rover",
        año: "1971",
        descripcion: "Vehículo utilizado por los astronautas para desplazarse y recoger muestras de la superficie lunar.",
        ubicacion: "moon",
        estado: "Estado: Abandonado en la Luna"
    },
    {
        nombre: "Surveyor 3",
        año: "1967",
        descripcion: "Sonda espacial que estudió el suelo lunar y envió fotografías de la superficie de la Luna.",
        ubicacion: "moon",
        estado: "Estado: Permanece en la Luna"
    },
    {
        nombre: "Viking 1",
        año: "1976",
        descripcion: "Fue una de las primeras misiones en aterrizar con éxito en Marte y estudiar su superficie.",
        ubicacion: "mars",
        estado: "Estado: Misión finalizada"
    },
    {
        nombre: "Mars Pathfinder",
        año: "1997",
        descripcion: "Misión que llevó el pequeño vehículo Sojourner para explorar el terreno marciano.",
        ubicacion: "mars",
        estado: "Estado: Misión finalizada"
    },
    {
        nombre: "Opportunity",
        año: "2004",
        descripcion: "Robot explorador que estudió las rocas y el suelo de Marte durante varios años.",
        ubicacion: "mars",
        estado: "Estado: Misión finalizada"
    }
];

// Obtener los elementos de la página
const grid = document.getElementById("equipmentGrid");
const filtros = document.querySelectorAll(".filter");

// Mostrar los equipos
function mostrarEquipos(categoria = "all") {

    const seleccionados = equipos.filter(equipo =>
        categoria === "all" || equipo.ubicacion === categoria
    );

    grid.innerHTML = seleccionados.map(equipo => `
        <article class="equipment-card">
            <span class="tag">${equipo.año}</span>

            <h3>${equipo.nombre}</h3>

            <p>${equipo.descripcion}</p>

            <p class="location">
                Ubicación: ${equipo.ubicacion === "moon" ? "Luna" : "Marte"}
            </p>

            <p class="location">${equipo.estado}</p>
        </article>
    `).join("");
}

// Activar los botones de filtros
filtros.forEach(boton => {

    boton.addEventListener("click", () => {

        filtros.forEach(filtro => {
            filtro.classList.remove("active");
        });

        boton.classList.add("active");

        mostrarEquipos(boton.dataset.filter);
    });

});

// Mostrar todos los equipos al abrir la página
mostrarEquipos();