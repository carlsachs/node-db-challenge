
const express = require('express');

const Pros = require('./projectModel.js')

const db = require("../data/dbConfig.js")

const router = express.Router();

//GET RESOURCES

router.get('/', (req, res) => {

    Pros.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Resources'})
    })
})

//POST RESOURCES

router.post('/', (req, res) => {
    const data = req.body
    Pros.addResource(data)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error creating Resource' })
    })
})

module.exports = router; 