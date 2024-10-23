const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'snippets');
const destDir = path.join(__dirname, 'dist', 'snippets');

// Create dist/snippets directory if it doesn't exist
fs.mkdirSync(destDir, { recursive: true });

// Copy all .json files from src/snippets to dist/snippets
fs.readdirSync(srcDir).forEach((file) => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
  console.log(`Copied ${file} to dist/snippets`);
});
