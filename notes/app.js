//Require the fs module to use file system
const fs = require('fs');
//Write to a file using path, data over write the old one
// fs.writeFileSync('Note.txt', 'this file was created by Node.js');
//Write to the file append! adding more data
// fs.appendFileSync('Note.txt', '\nHello World!');
// const num = require('./utils')


const notes = require('./notes')

//send the output from notes file
// console.log(outPut)

//npm package
const validator = require('validator')
//Notation change maybe ? default
//To test if the email format are correct!
// console.log(validator.default.isEmail('q807310185@yahoo.com'))
// console.log(validator.default.isURL('http://baidu.com'))

//npm chalk
const color = require('chalk')
const log = console.log

const yargs = require('yargs')
//customize yargs ver
yargs.version('1.1.0')

//add, remove, read, list
yargs.command({
    command:'add',
    describe:'Add a new note',
    //Use builder to configure the option
    builder:{
        //Set up property for options
        title:{
            describe: 'Note title',
            //Force it to provide a title
            demandOption: true,
            type: 'string',
        },

        body:{
            describe: 'body of the note',
            demandOption: true,
            type: 'String',
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
      title:{
          describe: 'Note Title',
          //This can force to require title
          //Default is false : not required
          demandOption: true,
          //Always force string for title
          type:'string'
      }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

//Custome yargs command
yargs.command({
    command:'list',
    describe:'list all the notes',
    handler:function () {
        console.log('List of notes')
    }
})

yargs.command({
    //THis is how to custom the command either just string to + / etc
    command: '+read',
    describe:'read a notes',
    handler: function () {
        console.log('reading a notes')
    }
})

// console.log(yargs.argv)
yargs.parse()










