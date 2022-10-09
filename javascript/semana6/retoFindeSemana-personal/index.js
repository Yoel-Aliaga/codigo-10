window.onload=start;

// import pokemon from "./data.json" assert {type:"json"};
// console.log(pokemon);

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc',
// 		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
// 	}
// };



// const url1 ='https://movies-app1.p.rapidapi.com/api/movies'

// const url2 = 'https://rickandmortyapi.com/'



// const url ='https://pokeapi.co/api/v2/pokemon/ditto'

// // console.log(urlAPI);

// const container = document.querySelector(".container");


// function leerPeliculas(){

//     pokemon.abilities.forEach((pokemon) => {
        
//         container.innerHTML=""
//         container.innerHTML += `<div class="movies">
//         <h4 class="title">${pokemon.ability.name}</h4>
//         <img src="" alt="" class="image">
//         <p class="description">${pokemon.ability.url}</p>                
//         </div>`
        
//     });

// }

// leerPeliculas();


// const urlAPI = 'https://api.jikan.moe/v4/anime?q=naruto&sfw'
// const urlAPI = 'https://catfact.ninja/fact'



// const container = document.querySelector(".container");


const qs = (txt) => document.querySelector(txt);

const container = qs(".container");
const title = qs(".title");
const img = qs(".image");
const description = qs(".description");
// const p = qs(".description");


const urlAPI = 'https://api.jikan.moe/v4/anime?q=naruto&sfw'

async function start(){   


    const respuesta = await fetch(urlAPI);
    const datos =  await respuesta.json();
    console.log(datos);
    
    datos.data.forEach((datos) => {
        // console.log(datos);

        // container.innerHtml = 
        // `<img class="image" src="${datos.url}" alt="" > `
        //     <h4 class="title">titulo</h4>
        //     <img class="image" src="" alt="" >
        //     <p class="description">description</p>                
        // </div>`

        
    });       
        

    // const imagen = datos.data[0].jpg.image_url;
    const url = datos.data[0].images.jpg.image_url;
    const title = datos.data[0].title;


    // pasas los datos al html
    img.src=url;
    description.innerText = title;


};

start();




