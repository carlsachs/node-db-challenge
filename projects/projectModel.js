const db = require('../data/dbconfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    addResource,
    getResources,
    addTask,
    getTasks
}

function find (){
    return db('projects');
}

function findById (id){
    return db('projects')
    .where({ id })
    .first();
}

function add (data){
    return db('projects')
    .insert(data)
}

function update (id, changes){
    return db('projects')
    .where({ id })
    .update(changes)
}

function remove (id){
    return db('projects')
    .where({ id })
    .del()
}

function addResource(data){
    return db('resources')
    .insert(data)
}

function getResources(){
    return db('resources')
}

function addTask(data){
    return db('tasks')
    .insert(data)
}

function getTasks(){
    return db('tasks as t')
    .select('t.*', 'p.project_name','p.project_description')
    .join('projects as p', 't.project_id', '=', 'p.id')
} 