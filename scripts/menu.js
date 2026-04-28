// Shared menu script for the site
// Provides toggleSubmenu, keyboard support and auto-open behavior for active submenus
let _menuKeyboardInitialized = false;
function toggleSubmenu(event, submenuId) {
    if (event && event.preventDefault) event.preventDefault();
    const submenu = document.getElementById(submenuId);
    if (!submenu) return;
    // Toggle 'open' class for CSS transitions and keep inline display for backward compatibility
    const willOpen = !submenu.classList.contains('open');
    submenu.classList.toggle('open', willOpen);
    submenu.style.display = willOpen ? 'block' : 'none';
}

function _initDropdownToggles() {
    document.querySelectorAll('.dropdown-toggle').forEach(function(btn) {
        // Extract submenu id from onclick if data-submenu isn't present
        if (!btn.hasAttribute('data-submenu')) {
            const onclick = btn.getAttribute('onclick') || '';
            const m = onclick.match(/'([^']+)'/);
            if (m) btn.setAttribute('data-submenu', m[1]);
        }
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
    });
}

function openActiveSubmenus() {
    document.querySelectorAll('.submenu').forEach(function(s) {
        if (s.querySelector('a.active')) {
            s.classList.add('open');
            s.style.display = 'block';
        } else if (!s.classList.contains('open')) {
            s.style.display = 'none';
        }
    });
}

function setupMenuKeyboard() {
    if (_menuKeyboardInitialized) return;
    document.addEventListener('keydown', function(e) {
        const t = e.target;
        if ((e.key === 'Enter' || e.key === ' ') && t && t.classList && t.classList.contains('dropdown-toggle')) {
            e.preventDefault();
            toggleSubmenu(e, t.getAttribute('data-submenu'));
        }
    });
    _menuKeyboardInitialized = true;
}

// Exposed convenience method for when the menu is injected after DOMContentLoaded
function enhanceMenu() {
    _initDropdownToggles();
    openActiveSubmenus();
    setupMenuKeyboard();
}

// On load, open submenus that contain an active link and wire keyboard support
document.addEventListener('DOMContentLoaded', function() {
    enhanceMenu();
});
