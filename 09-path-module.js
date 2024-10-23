const path = require('path');

console.log(path.sep) //creates a different platform specific separator

const filePath = path.join('/content', 'subfolder', 'test.txt');
//joins a sequence of path segments using the platform specific separator
console.log(filePath)

const base = path.basename(filePath)
//prints the last path segment used by the platform specific separator
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
//accepts a sequence of paths or path segments
// and resolves into an absolute path
console.log(absolute)