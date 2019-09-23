const fs = require('fs')
const color = require('chalk')

const str  = function () {
    return 'Your notes...'
}

const addNote = function( title, body) {
    const notes = loadNotes()

    //loop - array filter
    const duplicated = notes.filter(function (note) {
        return note.title === title
    })

    if(duplicated.length === 0){
        notes.push({
            title : title,
            body: body,
        })

        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note title taken!')
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    // var removed = false

    const note2keep = notes.filter(function (note) {
        //return true
        // if( note.title !== title){
            // console.log(note.title)
            //This is going loop through the whole notes list

            return note.title !== title
        // }
        // else
        // {
        //     removed = true
        //     console.log(color.bgGreen.black('Note Removed'))
    })

    // if(removed === false){
    //     console.log(color.bgRed.black('Note Not Found'))
    // }

    if(notes.length === note2keep.length){
        console.log(color.bgRed.black('Note Not Found'))
    }else
    {
        saveNotes(note2keep)
        console.log(color.bgGreen.black('Note Removed'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    str: str,
    addNote: addNote,
    removeNote : removeNote,
}