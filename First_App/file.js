/**
fs.readdir(path[, options], callback)
path <string> | <Buffer> | <URL>
options <string> | <Object>
  encoding <string> Default: 'utf8'
  withFileTypes <boolean> Default: false
callback <Function>
  err <Error>
  files <string[]> | <Buffer[]> | <fs.Dirent[]>
Reads the contents of a directory. The callback gets two arguments (err, files) 
where files is an array of the names of the files in the directory excluding '.' and '..'.
 */

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);


