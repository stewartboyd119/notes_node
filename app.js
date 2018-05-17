console.log("Starting notes node");
const fs = require('fs');
const _ = require('lodash');
const optimist = require('optimist');
const argv = require('yargs').argv;
const notes = require('./notes.js');

console.log(process.argv);
var myargs = optimist.argv;

if (argv.add) {
    console.log("added");
} else if (argv.delete) {
    console.log("deleted");
} else {
    console.log("something eles");

}
console.log(process.argv);
console.log(myargs);
console.log(argv);
