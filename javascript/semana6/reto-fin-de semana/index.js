window.onload = mostrar;

// const qs
const qs = (text) =>document.querySelector(text);

// URL API
const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json'

// Referencia los objetos
const container = qs(".container");
let title = qs(".title");

const p = qs(".texto");


// function
async function mostrar(){

const respuesta = await fetch(url);
const datos = await respuesta.json();
console.log(datos);



// recorrer el foreach

datos.entries.forEach(movie => {
    console.log(movie);

        // container.innerHTML += `<p class="texto">${datos.entries[0].title}</p>`
    container.innerHTML +=  
    ` 
    <div class="movie">
        <div class="title">${movie.title}</div>
        <div class="image">
            <img class="img" src="${movie.images.posterArt.url}" alt="" >
        </div>
        <div class="description">${movie.description}</div>
    </div>
    `;
    
});

// poner los datos en html

// title.innerText = datos.entries[0].title;



}