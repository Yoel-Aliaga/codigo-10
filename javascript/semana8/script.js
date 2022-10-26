window.onload = mostrar;

const url = 'https://api.github.com/users/Yoel-Aliaga'
const urlRepos = 'https://api.github.com/users/Yoel-aliaga/repos'

// const container

async function mostrar() {
    // Profile
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);



    // Repos
    const responseRepos = await fetch(urlRepos);
    const dataRepos = await responseRepos.json();
    // console.log(dataRepos[0].language);


    const profile = document.querySelector("#profile");
    const about = document.querySelector("#about");

    profile.innerHTML = `
    <div class="image">
        <div>
            <img src="${data.avatar_url}" alt="" width="150">
        </div>
            <button id="btnSeguir" class="btn btn-primary">Seguir</button>
    </div>

    <div class="content-profile">
    <h2>${data.login}</h2>
    <div class="job">Desarrollador Web</div>
    <img src="./images/link.png  "><a href="${data.html_url}"> ${data.html_url}</a>
    <h6>Registrado desde : ${data.created_at}</h6>
    <hr>
    <div class="followers-container">
        <div class="followers">
        <div>Seguidores:</div>
        <h2>${data.followers}</h2>
        </div>

        <div class="following">
        <div>Siguiendo:</div>
        <h2>${data.following}</h2>
        </div>

        <div class="repos">
        <div>Repos:</div>
        <h2>${data.public_repos}</h2>
        </div>

    </div>
    </div>
    `




};