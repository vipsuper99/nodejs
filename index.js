var express = require('express');
var  app = express();
var bodyParser = require('body-parser');//bodyparser

var port = 3000;//express

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');//pug
app.set('views', './views');//folder

var users = [
        {id: 1, name: 'Thinh'},
        {id: 2, name: 'An'}
];

app.get('/users', (req, res)=>{
    res.render('users/index', {
        users: users
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
    console.log(res.body);
});
app.listen(port, ()=> {
    console.log('server listening on port' + port);
})