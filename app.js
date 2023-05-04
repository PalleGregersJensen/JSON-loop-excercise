"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://dummy-movieobjects-default-rtdb.firebaseio.com/";

let movies = [];

async function initApp() {
  console.log("JS kører");
  movies = await fetchJsonFileAboutMovies();
  console.log(movies);
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
    const myHTML = `
      <div class="movie">
        <img src="${movie.image}">
        <h2>${movie.title}</h2>
        <p>Directed by: ${movie.director}</p>
      </div>
    `;
    document.querySelector("#grid-container").insertAdjacentHTML("beforeend", myHTML);
    document.querySelector("#grid-container .movie:last-child").addEventListener("click", () => movieClicked(movie));
  }
}

function movieClicked(movie) {
  showMovieModal(movie);
}

function showMovieModal(movie) {
  console.log(movie);

  document.querySelector("#dialog-image").src = movie.image;
  document.querySelector("#dialog-description").textContent = `Description: ${movie.description}`;
  document.querySelector("#dialog-director").textContent = `Director: ${movie.director}`;
  document.querySelector("#dialog-year-published").textContent = `Year published: ${movie.yearpublished}`;
  document.querySelector("#dialog-length-minutes").textContent = `Length in minutes: ${movie.lengthminutes}`;
  
  const dialog = document.querySelector("#dialog-modal");
  dialog.showModal();

  const closeButton = document.querySelector("#dialog-close-button");
  closeButton.addEventListener("click", () => dialog.close)
}
