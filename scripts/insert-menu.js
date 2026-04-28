// scripts/load-menu.js

// Вградено меню съдържание (от menu.html)
const MENU_HTML = `<!-- Canonical site menu (injected into pages) -->
<button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Отваряне на менюто">
    &#9776; Меню
</button>
<div class="nav-content">
<a href="index.html" class="brand-link">
    <div class="brand-container">
        <img src="img/site-logo.png?v=2" alt="Уеб дизайн Лого" class="brand-image">
    </div>
</a>

<a href="index.html" class="active" target="_self"><strong>Начало</strong></a>

<a href="#" class="dropdown-toggle" data-submenu="planning-submenu"
    onclick="toggleSubmenu(event, 'planning-submenu')">Планиране на уеб сайт</a>
<div id="planning-submenu" class="submenu">
    <a href="lesson1_goals_audience.html" target="_self">Основни етапи в планирането на уеб сайт</a>
    <a href="lesson2_domain_hosting.html" target="_self">Избор на име и регистриране на уеб сайт</a>
    <a href="test1.html" target="_self">Планиране на уеб сайт (Тест)</a>
</div>

<a href="#" class="dropdown-toggle" data-submenu="design-submenu"
    onclick="toggleSubmenu(event, 'design-submenu')">Проектиране на уеб сайт</a>
<div id="design-submenu" class="submenu">
    <a href="design_stages.html" target="_self">Основни етапи при проектиране на уеб сайт</a>
    <a href="page_design.html" target="_self">Проектиране на уеб страница</a>
    <a href="graphic_model.html" target="_self">Създаване на графичен модел на уеб страница</a>
    <a href="test2.html" target="_self">Проектиране и графичен дизайн на уеб сайт (Тест)</a>
</div>

<a href="#" class="dropdown-toggle" data-submenu="building-submenu"
    onclick="toggleSubmenu(event, 'building-submenu')">Изграждане, тестване и публикуване на уеб сайт</a>
<div id="building-submenu" class="submenu">
    <a href="web_standards.html" target="_self">Стандарти в уеб дизайна и уеб технологии</a>
    <a href="web_software_tools.html" target="_self">Специализирани софтуерни средства за създаване на уеб сайт</a>

    <a href="#" class="dropdown-toggle" data-submenu="html-submenu"
        onclick="toggleSubmenu(event, 'html-submenu')">HTML</a>
    <div id="html-submenu" class="submenu">
        <a href="basic.html" target="_self">Основи на HTML</a>
        <a href="formatting.html" target="_self">HTML тагове за форматиране на текст</a>
        <a href="links.html" target="_self">HTML тагове за форматиране на хипервръзки</a>
        <a href="forms.html" target="_self">HTML тагове за форматиране на потребителски форми</a>
        <a href="media.html" target="_self">HTML тагове за форматиране на медия (изображения, аудио, видео)</a>
        <a href="tables.html" target="_self">HTML тагове за форматиране на таблици</a>
        <a href="lists.html" target="_self">HTML тагове за форматиране на списъци</a>
    </div>

    <a href="#" class="dropdown-toggle" data-submenu="css-submenu" onclick="toggleSubmenu(event, 'css-submenu')">CSS</a>
    <div id="css-submenu" class="submenu">
        <a href="css_styling.html" target="_self">Визуално оформяне на уеб сайт с използване на CSS</a>
        <a href="css_properties.html" target="_self">Основни CSS свойства</a>
        <a href="css_text.html" target="_self">Оформяне на текст с CSS</a>
        <a href="css_background.html" target="_self">Оформяне на фон с CSS</a>
        <a href="css_borders.html" target="_self">Задаване на рамки с CSS</a>
        <a href="css_fonts.html" target="_self">Добавяне и използване на шрифтове с CSS</a>
    </div>

    <a href="testing_validation.html" target="_self">Тестване и валидиране на кода на уеб страница</a>
    <a href="publishing.html" target="_self">Публикуване на уеб сайт</a>
    <a href="evaluation_optimization.html" target="_self">Оценка и оптимизация на уеб сайт</a>
    <a href="traffic_analysis.html" target="_self">Анализ на посещаемостта на уеб сайт</a>
    <a href="project_presentation.html" target="_self">Представяне и защита на проект перед публика</a>
    <a href="test3.html" target="_self">Изграждане, тестване и публикуване на уеб сайт (Тест)</a>
</div>

<a href="#" class="dropdown-toggle" data-submenu="cms-submenu" onclick="toggleSubmenu(event, 'cms-submenu')">Системи за управление на уеб съдържанието</a>
<div id="cms-submenu" class="submenu">
    <a href="cms_intro.html" target="_self">Същност, предназначение и архитектура на CMS</a>
    <a href="test4.html" target="_self">Системи за управление на уеб съдържанието (Тест)</a>
</div>

<a href="#" class="dropdown-toggle" data-submenu="section5-submenu" onclick="toggleSubmenu(event, 'section5-submenu')">Сигурност в уеб</a>
<div id="section5-submenu" class="submenu">
    <a href="section5_lesson1.html" target="_self">Общи проблеми със сигурността в уеб</a>
    <a href="section5_lesson2.html" target="_self">Повишаване на сигурността на CMS сайт</a>
    <a href="section5_lesson3.html" target="_self">Създаване на резервно копие на сайт</a>
    <a href="test5.html" target="_self">Сигурност в уеб (Тест)</a>
</div>

<a href="test6.html" target="_self"><strong>Какво научихте в "Уеб дизайн" (Тест)</strong></a>

<a href="resources.html" target="_self"><strong>Източници и сходни сайтове</strong></a>
<a href="about.html" target="_self"><strong>За нас</strong></a>
</div>`;

// Функция за зареждане на менюто
function loadMenu() {
    const nav = document.querySelector('nav');
    if (!nav) {
        console.error('Nav елементът не е намерен!');
        return;
    }

    try {
        // Използваме вграденото меню съдържание
        nav.innerHTML = MENU_HTML;

        // Инициализиране на подменютата след зареждане
        initializeSubmenus();

        // Инициализиране на мобилното меню
        initMobileMenu();

        // Маркиране на активния линк
        highlightActiveLink();

        console.log('Менюто е заредено успешно!');
    } catch (error) {
        console.error('Грешка при зареждане на менюто:', error);
    }
}

// Функция за инициализиране на подменютата
function initializeSubmenus() {
    // Затваряне на всички подменюта
    function closeAllSubmenus() {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none';
        });
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.classList.remove('active');
        });
    }

    // Проверка дали dropdown-toggle е вложен (вътре в submenu)
    function isNestedToggle(toggle) {
        return toggle.closest('.submenu') !== null;
    }

    // Добавяне на event listeners за подменютата
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        // Премахване на стария onclick
        toggle.removeAttribute('onclick');

        // Добавяне на нов event listener
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);

            if (!submenu) return;

            const isOpen = submenu.style.display === 'block';
            const isNested = isNestedToggle(this);

            if (isNested) {
                // За вложени подменюта (HTML, CSS) - затваряме само другите вложени подменюта в същия родител
                const parentSubmenu = this.closest('.submenu');
                if (parentSubmenu) {
                    // Затваряме другите вложени подменюта в същия родител
                    parentSubmenu.querySelectorAll('.submenu').forEach(sm => {
                        if (sm !== submenu) {
                            sm.style.display = 'none';
                        }
                    });
                    // Премахваме active класа от другите вложени dropdown-toggles в същия родител
                    parentSubmenu.querySelectorAll('.dropdown-toggle').forEach(dt => {
                        if (dt !== this) {
                            dt.classList.remove('active');
                        }
                    });
                }

                // Отваряне/затваряне на текущото вложено подменю
                submenu.style.display = isOpen ? 'none' : 'block';
                if (isOpen) {
                    this.classList.remove('active');
                } else {
                    this.classList.add('active');
                }
            } else {
                // За главни подменюта - затваряме всички други главни подменюта и техните вложени
                const nav = document.querySelector('nav');
                if (nav) {
                    nav.querySelectorAll('.dropdown-toggle').forEach(dt => {
                        if (dt !== this && !isNestedToggle(dt)) {
                            const otherSubmenuId = dt.getAttribute('data-submenu');
                            const otherSubmenu = document.getElementById(otherSubmenuId);
                            if (otherSubmenu) {
                                otherSubmenu.style.display = 'none';
                                dt.classList.remove('active');
                                // Затваряме и всички вложени подменюта в другите главни подменюта
                                otherSubmenu.querySelectorAll('.submenu').forEach(sm => {
                                    sm.style.display = 'none';
                                });
                                otherSubmenu.querySelectorAll('.dropdown-toggle').forEach(dt2 => {
                                    dt2.classList.remove('active');
                                });
                            }
                        }
                    });
                }

                // Отваряне/затваряне на текущото главно подменю
                submenu.style.display = isOpen ? 'none' : 'block';
                if (isOpen) {
                    this.classList.remove('active');
                } else {
                    this.classList.add('active');
                }
            }
        });
    });

    // Затваряне на подменюта при клик извън тях
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.submenu') && !event.target.closest('nav')) {
            closeAllSubmenus();
        }
    });
}

// Функция за мобилното меню
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navContent = document.querySelector('.nav-content');
    
    if (toggle && navContent) {
        // Премахваме предишни listener-и (за избягване на дублиране)
        toggle.replaceWith(toggle.cloneNode(true));
        const newToggle = document.getElementById('mobileMenuToggle');
        
        newToggle.addEventListener('click', function() {
            navContent.classList.toggle('show');
            if(navContent.classList.contains('show')) {
                newToggle.innerHTML = '&#10006; Затвори';
            } else {
                newToggle.innerHTML = '&#9776; Меню';
            }
        });
    }
}

// Функция за маркиране на активния линк
function highlightActiveLink() {
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    // Премахване на активен клас от всички линкове
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });

    let targetLink = null;

    if (currentPage === 'flashcards.html' && topic) {
        // Ако сме в страницата с флашкарти, търсим линка на съответния урок
        // Проверяваме за точно съвпадение на името на файла или чрез topic mapping
        const possibleFilenames = [topic + '.html', topic + '.php'];

        document.querySelectorAll('nav a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && possibleFilenames.some(f => href.includes(f))) {
                targetLink = link;
            }
        });

        // Специални случаи за пренасочени теми (като web_standards)
        if (!targetLink && topic === 'web_standards') {
            targetLink = document.querySelector('nav a[href*="web_standards.html"]');
        }
    } else {
        // Стандартно търсене на активния линк за текущата страница
        document.querySelectorAll('nav a').forEach(link => {
            if (link.classList.contains('brand-link')) return;
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                targetLink = link;
            }
        });
    }

    if (targetLink) {
        targetLink.classList.add('active');

        // Рекурсивно отваряне на всички родителски подменюта
        let parent = targetLink.parentElement;
        while (parent && parent.tagName !== 'NAV') {
            if (parent.classList.contains('submenu')) {
                parent.style.display = 'block';
                const toggle = document.querySelector(`.dropdown-toggle[data-submenu="${parent.id}"]`);
                if (toggle) {
                    toggle.classList.add('active');
                }
            }
            parent = parent.parentElement;
        }
    }
}

// Зареждане на менюто при зареждане на страницата
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
} else {
    loadMenu();
}

// Също зареждане на менюто при промяна на URL (за SPA-like поведение)
window.addEventListener('popstate', highlightActiveLink);

// Експорт на функциите, ако са необходими от други скриптове
if (typeof window !== 'undefined') {
    window.loadMenu = loadMenu;
    window.initializeSubmenus = initializeSubmenus;
    window.highlightActiveLink = highlightActiveLink;
}
