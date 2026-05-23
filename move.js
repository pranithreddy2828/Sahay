const fs = require('fs');
const path = require('path');

const webDir = path.join(__dirname, 'web');
const targetDir = __dirname;

const files = fs.readdirSync(webDir);
for (const file of files) {
  fs.renameSync(path.join(webDir, file), path.join(targetDir, file));
}
fs.rmdirSync(webDir);
console.log('Moved successfully');
