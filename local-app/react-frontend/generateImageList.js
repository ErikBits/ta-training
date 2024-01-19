const fs = require('fs');
const path = require('path');

const imageDirectoryPath = path.join(__dirname, 'public/images');

const filenames= fs.readdirSync(imageDirectoryPath);

const outputFilePath = path.join(__dirname, 'src/helpers', 'imageList.js');
const outputContent = `export const imageList = ${JSON.stringify(filenames)};`;

fs.writeFileSync(outputFilePath, outputContent);

console.log('image list generated');