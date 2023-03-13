console.log('Beidou ❤️‍🔥');
import '@styles/main.css';
import amelia from '@images/ame-smile.png';

// Declarar API
const API = process.env.API;
console.log(API);

const fetchData = async (urlAPI)=> {
    const resolve = await fetch(urlAPI);
    const data = (await resolve).json();
    return data;
}

const getCharacter = async (urlAPI, mal_id)=> {
    const character = await fetchData(`${urlAPI}/characters/${mal_id}`);
    const characterImg = await fetchData(`${urlAPI}/characters/${mal_id}/pictures`)
    const characterVoices = await fetchData(`${urlAPI}/characters/${mal_id}/voices`)
    console.log(character.data);

    // Template
    const card = document.getElementById('card');
    const ref = document.getElementById('referencia')
    const title = document.createElement('h4');
    const subTitle = document.createElement('span');

    // crear actor de voz
    subTitle.textContent = `${characterVoices.data[2].person.name}`
    subTitle.className = 'text-sm text-gray-500 dark:text-gray-400'

    // crear imagen
    const image = document.createElement('img');
    image.className = 'object-cover';
    image.src = characterImg.data[5].jpg.image_url;
    image.alt = 'Amelia Smile image'

    // cover Image
    const coverImg = document.createElement('div');
    coverImg.className = 'w-24 h-24 bg-yellow-400/80 mb-3 rounded-full shadow-lg overflow-hidden';
    coverImg.appendChild(image),

    // crear nombre
    title.textContent = `${character.data.name}`;
    title.className = 'mb-1 text-xl font-medium text-gray-900 dark:text-white'
    card.insertBefore(coverImg, ref);
    card.insertBefore(title, ref);
    card.insertBefore(subTitle, ref);
}

getCharacter(API, '141790');