const path = require('path');

// shows the path seperator
console.log(path.sep);

// joining path

const filePath = path.join('/content','subfolder','text.txt');

console.log(filePath);
// return only destination file name
const base = path.basename(filePath);
console.log(base);

// finding absolute path in memory.
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);

