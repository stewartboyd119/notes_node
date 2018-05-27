const _ = require("lodash");
const fs = require('fs');


var originalNote = { name: "Stewart Boyd",
age: 23};


var originalNoteStr = JSON.stringify(originalNote);

const filename = "dog.json";
fs.open(filename, "w", (err, fd) => {
   if (err) throw err;
    fs.write(fd, originalNoteStr, () => {
        console.log("completed log");
        fs.closeSync(fd);
        fs.open(filename, "r", (err, fd) => {
            fs.readFile(fd, (err, data) => {
                if (err) throw err;
                var contentsJson = JSON.parse(data);
                console.log(contentsJson.name);
                console.log(contentsJson);
                fs.closeSync(fd);
            })
        });

    });
}) ;

fs.open("dog.json", "r", (err, fd) => {
})
