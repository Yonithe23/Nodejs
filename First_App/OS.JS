/**
os.freemem() , os.totalmem()
Returns: <integer>
Returns the amount of free system memory in bytes as an integer.

YOU CAN GET this info only on node , but you canot get this info when using JS b/c JS only run on browser
*/

const os = require("os");
const totalmem= os.totalmem();
const  freemem= os.freemem();

/**
 we use ES6 OR Template string
 */
console.log(`Total Memeory ${totalmem}`);
console.log(`Free memeory ${freemem}`);