/*//objects in javascript are key value pairs

const person = {
    name: "John",
    age: 30
};

//dot notation
console.log(person.name); //John*/

//sample notes express server
//import express
//sample todo express backend app

const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

NOTES = [
    {
        "id":1,
        "title":"Reading",
        "description":"Read a story book"
    },
    {
        "id":2,
        "title":"Listening",
        "description":"Listen to music"
    },
    {
        "id":3,
        "title":"Watching",
        "description":"Watch a movie"
    }
]
// let numberOfRequests = 0;

// function middleware(req, res, next){
//     numberOfRequests++;
//     console.log(`Number of requests: ${numberOfRequests}`);
//     next();
// }

// app.use(middleware)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/notes', (req, res) => {
    res.send(NOTES);
    });

app.get('/notes/:noteId', (req, res) => {
    const id = req.params.noteId;

    for(let i=0; i<NOTES.length; i++){
        if(NOTES[i].id == id){
            return res.send(NOTES[i]);
        }
    }
    res.send(`Note with id ${id} not found`);
    }
    );

app.post('/notes', (req, res) => {
    const {title, description} = req.body;
    const id = NOTES.length + 1;
    const newNote = {
        "id":id,
        "title":title,
        "description":description
    }
    NOTES.push(newNote);
    res.send(newNote);
    }
    );
    

app.put('/notes/:noteId', (req, res) => {
    const id = req.params.noteId;
    const {title, description} = req.body;
    for(let i=0; i<NOTES.length; i++){
        if(NOTES[i].id == id){
            NOTES[i].title = title;
            NOTES[i].description = description;
            res.send(NOTES[i]);
        }
    }
    res.send(`Note with id ${id} not found`);
    }
    );

app.delete('/notes/:noteId', (req, res) => {
    const id = req.params.noteId;
    for(let i=0; i<NOTES.length; i++){
        if(NOTES[i].id == id){
            NOTES.splice(i, 1);
            res.send(`Note with id ${id} deleted`);
        }
    }
    res.send(`Note with id ${id} not found`);
    }
    );

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
    );