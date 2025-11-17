// copy-to-api.js
const fs = require('fs');
const path = require('path');

const distFolder = path.join(__dirname, 'packages', 'backend', 'dist');
const apiFolder = path.join(__dirname, 'api');

// Remove old api folder
if (fs.existsSync(apiFolder)) {
  fs.rmSync(apiFolder, { recursive: true, force: true });
}

// Recreate api folder
fs.mkdirSync(apiFolder);

// Copy all files from dist to api
fs.readdirSync(distFolder).forEach(file => {
  fs.copyFileSync(path.join(distFolder, file), path.join(apiFolder, file));
});

console.log('Copied dist to api/');
