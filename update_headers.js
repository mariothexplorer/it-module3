const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\mario\\OneDrive - Министерство на образованието и науката\\Училище\\XII клас 2025-2026\\Информационни технологии - ПП\\УЕБ Дизайн\\Web Design Website';

fs.readdir(dir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(dir, file);

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log(err);
                }

                let content = data;
                let updated = false;

                // Regex to match header
                const headerRegex = /<header>\s*<h1>Информационни технологии \(профилирана подготовка\) модул 3 Уеб дизайн<\/h1>\s*<\/header>/g;

                // Broader regex in case of slight formatting differences, but sticking to what was likely generated
                // Actually, let's be safer and match any header that contains that specific H1 text or just the specific block
                // The PS script matched specific content. Let's try to match `<header>...<h1>...</h1>...</header>`
                // Since the user wants to REPLACE the header, replacing the whole innerHTML of header is safer if we want to empty it.
                // But the user's PS script was replacing the whole tag with `<header></header>`.

                if (content.match(headerRegex)) {
                    content = content.replace(headerRegex, '<header></header>');
                    updated = true;
                } else if (content.includes('<h1>Информационни технологии (профилирана подготовка) модул 3 Уеб дизайн</h1>')) {
                    // Fallback if specific whitespace regex fails but content is there inside header
                    // We can try to replace the known H1 inside Header
                    content = content.replace(/<header>[\s\S]*?<\/header>/, '<header></header>');
                    updated = true;
                }

                if (!content.includes('scripts/insert-header.js')) {
                    content = content.replace('</body>', '    <script src="scripts/insert-header.js"></script>\n</body>');
                    updated = true;
                }

                if (updated) {
                    fs.writeFile(filePath, content, 'utf8', (err) => {
                        if (err) return console.log(err);
                        console.log(`Updated ${file}`);
                    });
                }
            });
        }
    });
});
