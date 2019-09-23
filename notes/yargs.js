// const yargs = require('yargs')
// //customize yargs ver
// yargs.version('1.1.0')
//
// //add, remove, read, list
// yargs.command({
//     command:'add',
//     describe:'Add a new note',
//     //Use builder to configure the option
//     builder:{
//         //Set up property for options
//         title:{
//             describe: 'Note title',
//             //Force it to provide a title
//             demandOption: true,
//             type: 'string',
//         },
//
//         body:{
//             describe: 'body of the note',
//             demandOption: true,
//             type: 'String',
//         }
//     },
//     handler: function (argv) {
//         console.log('Title: ' + argv.title)
//         console.log('Body: '+ argv.body)
//     }
// })
//
// yargs.command({
//     command: 'remove',
//     describe: 'remove a note',
//     builder:{
//         title:{
//             describe: 'Note Title',
//             //This can force to require title
//             //Default is false : not required
//             demandOption: true,
//             //Always force string for title
//             type:'string'
//         }
//     },
//     handler: function (argv) {
//         console.log('removing a note', argv)
//     }
// })
//
// //Custome yargs command
// yargs.command({
//     command:'list',
//     describe:'list all the notes',
//     handler:function () {
//         console.log('List of notes')
//     }
// })
//
// yargs.command({
//     //THis is how to custom the command either just string to + / etc
//     command: '+read',
//     describe:'read a notes',
//     handler: function () {
//         console.log('reading a notes')
//     }
// })
//
// // console.log(yargs.argv)
// yargs.parse()
//
