"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://dummy-movieobjects-default-rtdb.firebaseio.com/";

let movies = [];

async function initApp() {
  console.log("JS kører");
  movies = await fetchJsonFileAboutMovies();
  console.log(movies);
  // movies.forEach(showMovies);
  showMovies(movies);
}

async function fetchJsonFileAboutMovies() {
  const response = await fetch(`${endpoint}/movies.json`);
  const data = await response.json();
  console.log(data);
  return Object.values(data);
}

function showMovies(movies) {
  for (const movie of movies) {
    const myHTML =
      /*html*/
      `<div class="movie">
        <img src = ${movie.image}>
        <h2>${movie.title}</h2>
        <p>Directed by: ${movie.director}</p>
      </div>
          `;
    document
      .querySelector("#grid-container")
      .insertAdjacentHTML("beforeend", myHTML);
    //  document
    //  .querySelector("#grid-container grid:last-child")
    //  .addEventListener("click", movieClicked);
  }
}

// const html =
/*html*/
//   `<table>
// <tr>
//   <td>${pokemon.name}</td>
//   <td><img src="${pokemon.image}"></td>
//   <td>${pokemon.dexindex}</td>
//   <td>${pokemon.type}</td>
// </tr>
//  `;

// document.querySelector("#pokemons").insertAdjacentHTML("beforeend", html);
// document
//   .querySelector("#pokemons table:last-child")
//   .addEventListener("click", pokemonClicked);
