// Obtener todos los elementos con la clase "pokemon_pokebola"
const pokebolas = document.querySelectorAll('.pokemon_pokebola');

// Recorrer cada elemento y agregar el evento click
pokebolas.forEach(pokebola => {
  pokebola.addEventListener('click', () => {
    // Obtener el elemento img_pokemon dentro del contenedor padre
    const imgPokemon = pokebola.querySelector('.img_pokemon');
    
    // Mostrar el Pokémon
    imgPokemon.style.display = "block";
  });
});

// Obtener todos los elementos h2
const h2Elements = document.querySelectorAll('h2');

// Recorrer cada elemento y agregar los eventos mouseover y mouseout
h2Elements.forEach(h2 => {
  h2.addEventListener('mouseover', () => {
    // Agregar clase para animación
    h2.classList.add('h2-animation');
  });

  h2.addEventListener('mouseout', () => {
    // Remover clase de animación
    h2.classList.remove('h2-animation');
  });
});

// Obtener todos los elementos h2 con la clase "pokemon-name"
const pokemonNames = document.querySelectorAll('.pokemon-name');

// Recorrer cada elemento y agregar el evento click
pokemonNames.forEach(name => {
  name.addEventListener('click', () => {
    // Obtener el enlace del Pokémon dentro del elemento padre
    const link = name.querySelector('a');
    
    // Activar el enlace
    link.click();
  });
});

const header = document.querySelector('.img-principal');

header.addEventListener('mouseover', () => {
  header.style.transform = 'translateY(10px)';
  header.style.transition = 'transform 0.3s ease';
});

header.addEventListener('mouseout', () => {
  header.style.transform = 'translateY(0)';
  header.style.transition = 'transform 0.3s ease';
});

// Obtener todos los elementos con la clase "pokemon_pokebola"
const pokebolas1 = document.querySelectorAll('.pokemon_pokebola');

// Recorrer cada elemento y agregar el evento dblclick
pokebolas.forEach(pokebola => {
  pokebola.addEventListener('dblclick', () => {
    // Obtener el elemento img_pokemon dentro del contenedor padre
    const imgPokemon = pokebola.querySelector('.img_pokemon');
    
    // Esconder el Pokémon
    imgPokemon.style.display = "none";
  });
});