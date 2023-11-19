document.addEventListener("DOMContentLoaded", function () {
    const listaPokemon = document.querySelector("#listaPokemon");
    let URL = "https://pokeapi.co/api/v2/pokemon/";

    
    const sincronizarNumeros = [];

    
    for (let i = 1; i <= 1017; i++) {
        sincronizarNumeros.push(
            fetch(URL + i)
                .then((response) => response.json())
        );
    }

    
    Promise.all(sincronizarNumeros)
        .then((pokemonArray) => {
            
            pokemonArray.forEach((data) => mostrarPokemon(data));
        });

    function mostrarPokemon(data) {
        const poke = data;
        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
            <div class="pokemon-header">
                <p id="" class="id-pokemon-fondo">#${poke.id}</p>
                <div class="img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png" alt="">
                </div>
                <div class="descripcion">
                    <div class="id-pokemon">#${poke.id}</div>
                    <h2 class="nombre">${poke.name}</h2>
                </div>
                <div class="tipo">
                    ${poke.types
                        .map(
                            (type) =>
                                `<p class="${type.type.name} tipo">${type.type.name}</p>`
                        )
                        .join("")}
                </div>
                <div class="caracteristicas">
                    <p class="caracter">${poke.height / 10}m</p>
                    <p class="caracter">${poke.weight / 10}kg</p>
                </div>
            </div>
        `;

        listaPokemon.append(div);
    }
});
