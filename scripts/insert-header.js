// Load flashcards data globally
const script = document.createElement('script');
script.src = 'scripts/flashcards-data.js';
document.head.appendChild(script);

const HEADER_HTML = `
    <h1>Информационни технологии (профилирана подготовка) модул 3 Уеб дизайн</h1>
`;

function loadHeader() {
    const header = document.querySelector('header');
    if (!header) {
        console.error('Header element not found!');
        return;
    }
    header.innerHTML = HEADER_HTML;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}
