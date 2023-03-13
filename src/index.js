console.log('Beidou ❤️‍🔥');
import '@styles/main.css';

// Declarar API
const API = process.env.API;
console.log(API);

const appNode = document.getElementById('app');

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
        console.log(item.character.name)

        // boton1
        const boton1 = document.createElement('a');
        boton1.className = 'mb-2 md:mb-0 md:mr-2 md:inline-flex md:items-center md:space-x-3 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
        boton1.href = '#';
        boton1.textContent = 'Add friend';

        // boton2
        const boton2 = document.createElement('a');
        boton2.className = 'md:inline-flex md:items-center  md:space-x-3 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700';
        boton2.href = '#';
        boton2.textContent = 'Message';

        // cajaBotones
        const cajaBotones = document.createElement('div');
        cajaBotones.className = 'flex flex-col flex-nowrap mt-4 md:flex-row md:mt-6'
        cajaBotones.append(boton1, boton2);

        // crear actor de voz
        const actor = document.createElement('span');
        const nameActor = item.character.name;
        actor.textContent = nameActor.replace(",", "");
        actor.className = 'text-sm text-gray-500 dark:text-gray-400';

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
        hijo2.append(coverImg, nombre, actor, cajaBotones);

        // hijo1
        const hijo1 = document.createElement('div');
        hijo1.className = 'flex flex-col items-center pb-10';
        hijo1.append(hijo2);

        // padre
        const padre = document.createElement('div');
        padre.className = 'w-full min-w-232px max-w-sm pl-4 pr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700';
        padre.append(hijo1);

        todosLosItems.push(padre);
    });

    appNode.append(...todosLosItems);
}



getCharacter(API, '48926');