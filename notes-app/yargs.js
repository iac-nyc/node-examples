const  getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');


//console.log(process.argv);
/*
node yargs.js add --title="My Title"
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Iftekhar A Chowdhury\\Desktop\\nodeJS\\notes-app\\yargs.js',
  'add',
  '--title=My Title' ]
*/

// Create add command
// node yargs.js add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note');
    }
});

// Create remove command
// node yargs.js remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
});

// Create list command
// node yargs.js list
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('Listing all notes');
    }
});

// Create read command
// node yargs.js read
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function(){
        console.log('Reading a note');
    }
});

console.log(yargs.argv);
/*

node yargs.js add --title="My Title"  
{ _: [ 'add' ], title: 'My Title', '$0': 'yargs.js' }

*/

//Customize yargs version
// node yargs.js --version
yargs.version('1.1.0');


