console.log("Starting notes node");
const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;
const notes = require('./notes.js');

var filename = 'notes_data.json';
console.log(argv._);
var command = argv._[0];

const add = "add";
const remove = "remove";
const list = "list";
const get = "get";
if (command === add) {
    var note = notes.addNotes(filename, argv.title, argv.body);
    if (note) {
        notes.printNote(note);
    } else {
        console.log("Note already exists");
    }
} else if (command === remove) {
    console.log(argv);
    var wasRemoved = notes.removeNote(filename, argv.title);
    var message = wasRemoved ? "Note was removed" : "Not wasnt removed";
    console.log(message);
} else if (command === list) {
    notes.getAll(filename);
} else if (command === get) {
    var note = notes.getNote(filename, argv.title);
    message = note ? notes.printNote(note) : 'note not found';
    console.log(message);
} else {
    console.log("something eles");
}