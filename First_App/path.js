/**
The path.parse() method returns an object whose properties represent significant elements of the path. 
The returned object will have the following properties:
dir <string>
root <string>
base <string>
name <string>
ext <string>
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
" C:\\  home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)
{
  root: 'C:\\',
  dir: 'C:\\Users\\Yonas\\Desktop\\Exericise\\Nodejs\\First_App',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
__dirname
{
  root: 'C:\\',
  dir: 'C:\\Users\\Yonas\\Desktop\\Exericise\\Nodejs',
  base: 'First_App',
  ext: '',
  name: 'First_App'
}
 */

const path = require('path'); // built function b/c no relative path or relative direction in require function path
const pathobj = path.parse(__dirname)
console.log(pathobj)
