document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");

    function setupSearch() {
        searchBar.addEventListener("input", function () {
            const searchTerm = searchBar.value.toLowerCase();
            const pokemonCards = document.querySelectorAll(".pokemon");

            pokemonCards.forEach((card) => {
                const pokemonName = card.querySelector(".nombre").textContent.toLowerCase();
                if (pokemonName.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    setupSearch();
});

// Después de cargar la lista de Pokémon dinámicamente

setupSearch();
