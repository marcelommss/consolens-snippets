const fs = require('fs');
const path = require('path');

// Define source and destination directories
const srcDir = path.resolve(__dirname, 'src/snippets');
const distDir = path.resolve(__dirname, 'dist/snippets');

// Ensure the destination directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Copy all snippet files from src/snippets to dist/snippets
fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const distFile = path.join(distDir, file);
    fs.copyFileSync(srcFile, distFile);
    console.log(`Copied ${file} to dist/snippets`);
});
