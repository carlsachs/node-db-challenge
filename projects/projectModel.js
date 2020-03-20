const db = require('../data/dbconfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
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