const express = require('express');

const Pros = require('./projectModel.js')

const router = express.Router();

//GET TASKS

router.get('/', (req, res) => {
    Pros.getTasks()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Tasks'})
    })
})

//POST TASK

router.post('/', (req, res) => {
    const data = req.body
    Pros.addTask(data)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error adding new Task' })
    })
})

module.exports = router; 