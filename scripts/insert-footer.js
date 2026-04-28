// scripts/insert-footer.js

const FOOTER_HTML = `
    <div class="footer-left">
        <div class="footer-line">Разработили: Симона Цветанова и Марио Петров,</div>
        <div class="footer-line">ученици в XII<sup>Г</sup> клас на МГ "Гео Милев" - </div>
        <div class="footer-line">град Плевен за учебната 2025/2026</div>
        <div class="footer-line mt-10">Ръководител: Людмила Петкова,</div>
        <div class="footer-line">старши учител математика, информатика и ИТ</div>
    </div>

    <div class="footer-center">
        <div class="footer-title">Информационни технологии (профилирана подготовка)</div>
        <div class="footer-title">Модул 3: Уеб дизайн</div>
        <div class="footer-line"><strong>&copy; 2026</strong> | <a href="sitemap.html" style="color: inherit; text-decoration: underline;">Карта на сайта</a></div>
    </div>

    <div class="footer-right">
        <div class="footer-line">Този сайт е създаден изцяло с образователна цел,</div>
        <div class="footer-line">информацията е използвана от учебника за</div>
        <div class="footer-line">модул 3 "Уеб дизайн" по профилирана подготовка</div>
        <div class="footer-line">по ИТ на издателство Домино ЕООД, одобрен със</div>
        <div class="footer-line">заповед № РД 09- 1307/28.06.2021 г. на МОН</div>
    </div>
`;

function loadFooter() {
    const footer = document.querySelector('footer');
    if (!footer) {
        console.error('Footer element not found!');
        return;
    }
    footer.innerHTML = FOOTER_HTML;

    // Add "Practice" link if on a lesson page
    const container = document.querySelector('.container');
    if (container) {
        const page = window.location.href.split(/[\\/]/).pop().split(".")[0] || 'index';

        // Static list of pages that have flashcards to ensure the link appears instantly
        const flashcardPages = [
            'lesson1_goals_audience', 'lesson2_domain_hosting',
            'design_stages', 'page_design', 'graphic_model',
            'web_standards', 'web_software_tools',
            'basic', 'formatting', 'links', 'forms', 'media', 'tables', 'lists',
            'css_styling', 'css_properties', 'css_text', 'css_background', 'css_borders', 'css_fonts',
            'testing_validation', 'publishing', 'evaluation_optimization', 'traffic_analysis',
            'project_presentation', 'cms_intro',
            'section5_lesson1', 'section5_lesson2', 'section5_lesson3'
        ];

        const pageToTopic = {
            'web_standards_w3c': 'web_standards',
            'stabdarts': 'web_standards'
        };

        const topic = pageToTopic[page] || (flashcardPages.includes(page) ? page : null);

        if (topic) {
            // Check if link already exists to avoid duplicates
            if (!document.getElementById('practice-link-container')) {
                const practiceDiv = document.createElement('div');
                practiceDiv.id = 'practice-link-container';
                practiceDiv.style.marginTop = '40px';
                practiceDiv.style.marginBottom = '20px';
                practiceDiv.style.padding = '20px';
                practiceDiv.style.backgroundColor = '#f8f9fa';
                practiceDiv.style.border = '1px solid #dee2e6';
                practiceDiv.style.borderRadius = '10px';
                practiceDiv.style.textAlign = 'center';
                practiceDiv.style.fontSize = '1.2em';

                const pageHeader = document.querySelector('h2');
                const pageTitle = pageHeader ? pageHeader.textContent.trim() : '';
                practiceDiv.innerHTML = `<strong>Научи нещо ново и се упражни:<a href="flashcards.html?topic=${topic}&title=${encodeURIComponent(pageTitle)}" style="color: #000000; font-weight: bold; text-decoration: underline; margin-left: 10px;">тук</a></strong>`;

                container.appendChild(practiceDiv);
            }
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
