console.log('Beidou ❤️‍🔥');
import '@styles/main.css';
import amelia from '@images/ame-smile.png';

// Declarar API
const API = process.env.API;
console.log(API);


(async function App() {
    const card = document.getElementById('card');
    const ref = document.getElementById('subtitle')
    const title = document.createElement('h4');

    // crear imagen
    const image = document.createElement('img');
    image.className = 'w-24 h-24 bg-yellow-400/80 mb-3 rounded-full shadow-lg';
    image.src = amelia;
    image.alt = 'Amelia Smile image'

    // crear nombre
    title.textContent = 'Amelia Watson';
    title.className = 'mb-1 text-xl font-medium text-gray-900 dark:text-white'
    card.insertBefore(image, ref);
    card.insertBefore(title, ref);
})();