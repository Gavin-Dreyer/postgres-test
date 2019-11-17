const express = require('express');

const db = require('../data/db-config.js');

const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' })
})

server.get('/users', (req, res) => {
    db(users).then(response => {
        res.json(response)
    }).catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
    });
})



module.exports = server;