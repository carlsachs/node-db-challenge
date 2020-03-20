const express = require('express');

const Pros = require('./projectModel.js')

const db = require("../data/dbConfig.js")

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

//GET REQUEST FOR PROJECTS BY ID

router.get('/:id', (req, res) => {
    db('projects')
    .where({ id: req.params.id })
    .first()
    .then(pro => {
        if(pro){
            res.status(200).json({ data: pro })
        } else {
            res.status(404).json({ message: "Project not found" })
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error finding project" })
    })
})

//POST REQUEST FOR PROJECTS

router.post('/', (req,res) => {
    db('projects').insert(req.body, 'id')
    .then(ids => {
        res.status(201).json({ results: ids })
    })
    .catch(err => {
        res.status(500).json({ message: "Error adding project" })
    })
})

//UPDATE REQUEST FOR PROJECTS BY ID

router.put('/:id', (req, res) => {
    db('projects')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
        if (count > 0){
            res.status(200).json({ count })
        } else {
            res.status(404).json({ message: "Could not find project" })
        }
    })
    .catch(() => {
        res.status(500).json({ message: "Error updating project" })
    })
})

//DELETE PROJECT

router.delete('/:id', (req, res) => {
    db('projects')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if (count > 0){
            res.status(200).json({ message: 'Project deleted successfully' })
        } else {
            res.status(404).json({ message: "Project not found" })
        }
    })
    .catch(() => {
        res.status(500).json({ message: "Error deleting Project" })
    })
})

//GET TASKS

router.get('/tasks', (req, res) => {
    Pros.getTasks()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Tasks'})
    })
})

//POST TASK

router.post('/tasks', (req, res) => {
    const data = req.body
    Pros.addTask(data)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error adding new Task' })
    })
})

//GET RESOURCES

router.get('/resources', (req, res) => {

    Pros.getResources()
    .then(resource => {
        res.status(200).json(resources)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Resources'})
    })
})

//POST RESOURCES

router.post('/resources', (req, res) => {
    const data = req.body

    Project.addResource(data)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error creating Resource' })
    })
})

module.exports = router 