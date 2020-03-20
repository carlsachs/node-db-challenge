const db = require('../data/dbconfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find (){
    return db('characters');
}

function findById (id){
    return db('characters')
    .where({ id })
    .first();
}

function add (data){
    return db('characters')
    .insert(data)
}

function update (id, changes){
    return db('characters')
    .where({ id })
    .update(changes)
}

function remove (id){
    return db('characters')
    .where({ id })
    .del()
}