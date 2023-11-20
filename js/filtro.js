document.addEventListener("DOMContentLoaded", async function () {
    const tipoSelect = document.getElementById("tipoSelect");
    let pokemonCards = document.querySelectorAll(".pokemon");

    async function cargarTipos() {
        try {
            // Obtén la lista de tipos desde la API PokeAPI
            const response = await fetch("https://pokeapi.co/api/v2/type/");
            const data = await response.json();

            // Llena el menú desplegable con los tipos
            data.results.forEach((tipo) => {
                const option = document.createElement("option");
                option.value = tipo.name;
                option.textContent = tipo.name.charAt(0).toUpperCase() + tipo.name.slice(1);
                tipoSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Error al cargar los tipos:", error);
        }
    }

    function setupFiltro() {
        // Configura el evento de cambio en el menú desplegable
        tipoSelect.addEventListener("change", function () {
            actualizarVisibilidad();
        });

        // Configura el evento del botón de filtrar
        const filtrarButton = document.getElementById("filtrarButton");
        filtrarButton.addEventListener("click", function () {
            actualizarVisibilidad();
        });
    }

    function actualizarVisibilidad() {
        const selectedTipo = tipoSelect.value.toLowerCase();

        // Volvemos a seleccionar las tarjetas después del cambio en el menú desplegable
        pokemonCards = document.querySelectorAll(".pokemon");

        pokemonCards.forEach((card) => {
            const cardTipos = Array.from(card.querySelectorAll(".tipo")).map((tipo) =>
                tipo.textContent.toLowerCase()
            );

            if (selectedTipo === "" || cardTipos.includes(selectedTipo)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    await cargarTipos();
    setupFiltro();

    // Al cargar la página, asegúrate de mostrar todas las tarjetas
    tipoSelect.value = "";
    actualizarVisibilidad();
});
