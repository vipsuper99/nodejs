var express = require('express');
var  app = express();
var bodyParser = require('body-parser');//bodyparser
var low = require('lowdb');//lowdb
var FileSync = require('lowdb/adapters/FileSync');//lowdb
var adapter = new FileSync('db.json');

db = low(adapter);
db.defaults({ users: []})
    .write()
var port = 3000;//express

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');//pug
app.set('views', './views');//folder

app.get('/users', (req, res)=>{
    res.render('users/index', {
        users: db.get('users').value()
    });
});//in ra users.

app.get('/users/search', (req, res)=> {
    var q = req.query.q;
    var matchedUsers = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    }); 
});//search

app.get('/users/create', (req, res) =>{
    res.render('users/create');
});//hiện ra create pug.

app.post('/users/create', (req, res)=> {
    db.get('users').push(req.body).write();
    res.redirect('/users');
}); // post methor

app.listen(port, ()=> {
    console.log('server listening on port' + port);
})