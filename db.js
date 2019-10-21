var low = require('lowdb');//lowdb
var FileSync = require('lowdb/adapters/FileSync');//lowdb
var adapter = new FileSync('db.json');

db = low(adapter);
db.defaults({ users: []})
    .write()

module.exports = db;