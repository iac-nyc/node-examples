const add = require('./utils.js');
const  getNotes = require('./notes.js');

const sum = add(4,-2);

console.log(sum);

const msg = getNotes();

console.log(msg);
