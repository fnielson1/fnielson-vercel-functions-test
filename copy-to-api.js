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

// Recursively copy dist -> api
fs.cpSync(distFolder, apiFolder, { recursive: true });

console.log('Copied dist to api/');
