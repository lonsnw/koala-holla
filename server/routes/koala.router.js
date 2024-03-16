const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

// DB CONNECTION
const pool = new pg.Pool({
    database: 'koala-holla',
    host: 'localhost',
    port: 5432
});

// creating a global variable to hold koalas
// commenting out after implementing database
// let koalaHolla = [
//     {
//         name: 'Scotty',
//         age: 4,
//         color: 'Red',
//         transfer: 'Yes',
//         notes: 'Born in Guatemala',
//     },
//     {
//         name: 'Jean',
//         age: 5,
//         color: 'Green',
//         transfer: 'Yes',
//         notes: 'Allergic to lots of lava',
//     },
//     {
//         name: 'Ororo',
//         age: 7,
//         color: 'Yellow',
//         transfer: 'No',
//         notes: 'Loves listening to Paula (Abdul)',
//     },
//     {
//         name: `K'Leaf`,
//         age: 15,
//         color: 'Purple',
//         transfer: 'No',
//         notes: 'Never refuses a treat.',
//     },
//     {
//         name: 'Charlie',
//         age: 9,
//         color: 'Orange',
//         transfer: 'Yes',
//         notes: 'Favorite band is Nirvana',
//     },
//     {
//         name: 'Betsy',
//         age: 4,
//         color: 'Blue',
//         transfer: 'Yes',
//         notes: 'Has a pet iguana',
//     },
// ];

// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET request made to /koalas');
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            console.log(result);
        }).catch((error) => {
            console.error('Error in GET /koalas', error);
            res.sendStatus(500);
        })
});

// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST request made for /koalas');
    console.log('req.body', req.body);
    let queryText = `
    INSERT INTO "koalas" ("name", "age", "color", "transfer", "notes")
    VALUES ($1, $2, $3, $4, $5);
    `;
    pool.query(queryText, [req.body.name, req.body.age, req.body.color, req.body.transfer, req.body.notes])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.error('Error in POST /koalas', error);
            res.sendStatus(500);
        })
});

// PUT


// DELETE
// not sure how you do this with a router; with just the server, 
// it would be '/koalas/:id'
koalaRouter.delete('/:id', (req, res) => {
    console.log(req.params);
// the sample we half-learned used the index

    res.sendStatus(201);
})


module.exports = koalaRouter;