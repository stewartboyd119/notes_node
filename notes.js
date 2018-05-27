const fs = require('fs');
const _ = require('lodash');




var fetchNotes = (filename) => {

    
    try {
        var contents = fs.readFileSync(filename);
        return JSON.parse(contents);
    } catch (e) {
        return [];
    }
};

var printNote = (note) => {
    console.log(`Added note with title=${note.title} and body=${note.body}`);
}

var saveNotes = (filename, notes) => {

    fs.writeFileSync(filename, JSON.stringify(notes));
};

var saveNote = (filename, note, notes) => {

    var duplicateNotes = notes.filter((e) => e.title === note.title);
    if (duplicateNotes.length === 0 ){
    //if (_.indexOf(notes, note) === -1 ) {
        console.log('add note');
        notes.push(note);
        saveNotes(filename, notes);
        return note;
    } else {
        console.log('no note added');
    }
};

addNotes = (filename, title, body) => {
    console.log("addNotes");
    console.log("adding note", title, body);
    var note = {
        title,
        body
    };
    var notes = fetchNotes(filename);
    console.log(notes);
    
    // is there a note in notes that is equal to input "note"
    return saveNote(filename, note, notes);
    
};

getAll = (filename) => {
    console.log("get all");
    var notes = fetchNotes(filename)
    console.log(notes)
}

getNote = (filename, title) => {
    console.log("getNotes", title);
    var notes = fetchNotes(filename)
    var filteredNotes = _.filter(notes, n => n.title === title);
    if (filteredNotes) {
        return _.first(filteredNotes);
    }
    console.log(filteredNotes)

}
removeNote = (filename, title) => {
    console.log("delete", title);
    var notes = fetchNotes(filename);
    var remainingNotes = _.filter(notes, n => n.title !== title);
    return remainingNotes.length !== notes.length;
}

module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote,
    printNote
};
