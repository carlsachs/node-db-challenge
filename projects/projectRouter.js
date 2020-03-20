const express = require('express');

const Pros = require('./projectModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    Pros.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error when fetching' })
    })
})

module.exports = router