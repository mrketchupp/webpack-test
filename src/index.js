console.log('Beidou ❤️‍🔥');
import './styles/main.css';

(async function App() {
    const main = document.getElementById('main');
    const title = document.createElement('h1');
    title.textContent = 'Beidou ❤️‍🔥';
    title.className = 'text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight'
    main.appendChild(title);
})();