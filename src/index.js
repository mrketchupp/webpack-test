console.log('Beidou ❤️‍🔥');
import '@styles/main.css';

// Declarar API
const API = 'https://api.jikan.moe/v4';
console.log(API);

const appNode = document.getElementById('app');

// Busqueda de anime
const searchKey = document.getElementById('searchKey');
searchKey.addEventListener('keydown', (e)=>{e.key == 'Enter' ? getAnime(API, searchKey.value): ""});

const searchButton = document.getElementById('searchButton');
console.log(searchButton)
searchButton.addEventListener('click', ()=>{getAnime(API, searchKey.value)});


// Llamada a API
const fetchData = async (urlAPI)=> {
    const resolve = await fetch(urlAPI);
    const data = (await resolve).json();
    return data;
}

// Datos de API
const getCharacter = async (urlAPI, mal_id)=> {
    const character = await fetchData(`${urlAPI}/anime/${mal_id}/characters`);
    // const characterImg = await fetchData(`${urlAPI}/characters/${mal_id}/pictures`)
    // const characterVoices = await fetchData(`${urlAPI}/characters/${mal_id}/voices`)
    console.log(character.data[0].voice_actors[1].person.name);

    const todosLosItems = [];
    character.data.forEach(item => {
        // Template
        // const segundoActorDeVoz = item.voice_actors[1];
        // const result = segundoActorDeVoz.person.name !== undefined ? segundoActorDeVoz.person.name : "no existe";
        // console.log(result);

        // crear actor de voz
        const actor = document.createElement('span');
        // Comprobar si el nombre existe
        if (item?.voice_actors[1]?.person?.name === undefined) {
            const nameActor = "No existe";
            actor.textContent = nameActor.replace(",", "");
            actor.className = 'text-sm text-gray-500 dark:text-gray-400';
        } else {
            const nameActor = item.voice_actors[1].person.name;
            actor.textContent = nameActor.replace(",", "");
            actor.className = 'text-sm text-gray-500 dark:text-gray-400';
        }

        // crear imagen
        const image = document.createElement('img');
        image.className = 'object-cover';
        image.src = item.character.images.jpg.image_url;
        image.alt = 'Amelia Smile image'

        // cover Image
        const coverImg = document.createElement('div');
        coverImg.className = 'w-24 h-24 mb-3 rounded-full shadow-lg overflow-hidden';
        coverImg.append(image);

        // crear nombre
        const nombre = document.createElement('h5');
        const nameCharacter = item.character.name;
        nombre.textContent = nameCharacter.replace(",", "");
        nombre.className = 'mx-auto text-xl font-medium text-gray-900 dark:text-white'

        // hijo2
        const hijo2 = document.createElement('div');
        hijo2.className = 'grid place-items-center mt-4 text-center space-y-3 md:mt-6';
        hijo2.append(coverImg, nombre, actor);

        // hijo1
        const hijo1 = document.createElement('div');
        hijo1.className = 'flex flex-col items-center pb-6';
        hijo1.append(hijo2);

        // padre
        const padre = document.createElement('div');
        padre.className = 'w-full min-w-232px max-w-240px pl-4 pr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700';
        padre.append(hijo1);

        todosLosItems.push(padre);
    });

    appNode.append(...todosLosItems);
}

// Buscar anime
const getAnime = async (urlAPI, busqueda)=>{
    // Limpiar los resultados anteriores
    while (appNode.hasChildNodes()) {
        appNode.removeChild(appNode.firstChild);
    }

    // Realizar la busaqueda y conseguir mal_id del anime
    const anime = await fetchData(`${urlAPI}/anime?q=${busqueda}&limit=1`)
    console.log(anime.data[0].mal_id);
    const mal_id = anime.data[0].mal_id

    // Enviabamos el mal_id y listamos los personajes en el DOM
    getCharacter(API, mal_id);
}