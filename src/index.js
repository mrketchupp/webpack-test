console.log('Beidou ❤️‍🔥');
import './styles/main.css';

(async function App() {
    const card = document.getElementById('card');
    const ref = document.getElementById('subtitle')
    const title = document.createElement('h4');
    title.textContent = 'Amelia Watson';
    title.className = 'mb-1 text-xl font-medium text-gray-900 dark:text-white'
    card.insertBefore(title, ref);
})();