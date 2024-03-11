const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// creating a global variable to hold koalas
let koalaHolla = [
    {
        name: 'Scotty',
        age: 4,
        color: 'Red',
        transfer: 'Yes',
        notes: 'Born in Guatemala',
    },
    {
        name: 'Jean',
        age: 5,
        color: 'Green',
        transfer: 'Yes',
        notes: 'Allergic to lots of lava',
    },
    {
        name: 'Ororo',
        age: 7,
        color: 'Yellow',
        transfer: 'No',
        notes: 'Loves listening to Paula (Abdul)',
    },
    {
        name: `K'Leaf`,
        age: 15,
        color: 'Purple',
        transfer: 'No',
        notes: 'Never refuses a treat.',
    },
    {
        name: 'Charlie',
        age: 9,
        color: 'Orange',
        transfer: 'Yes',
        notes: 'Favorite band is Nirvana',
    },
    {
        name: 'Betsy',
        age: 4,
        color: 'Blue',
        transfer: 'Yes',
        notes: 'Has a pet iguana',
    },
];

// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET request made to /koalas');
    res.send(koalaHolla);
})

// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST request made for /koalas');
    console.log(req.body);
    koalaHolla.push(req.body);
    res.sendStatus(201);
})

// PUT


// DELETE

module.exports = koalaRouter;