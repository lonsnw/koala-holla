const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// creating a global variable to hold koalas
let koalaHolla = [];

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