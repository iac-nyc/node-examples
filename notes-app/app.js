const fs = require('fs');

//fs.writeFileSync('notes.txt', 'Iftekhar is learning Node.js and this file was created by Node.js!');

fs.appendFileSync('notes.txt',' Now learning data to append', 'utf8');