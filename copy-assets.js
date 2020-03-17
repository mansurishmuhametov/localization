const path = require('path');
const fse = require('fs-extra');

const fromPath = path.resolve(__dirname, 'src/assets');
const toPath = path.resolve(__dirname, 'dist/npm/assets');

fse.copy(fromPath, toPath, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("copy-assets.js - Success!");
    }
});