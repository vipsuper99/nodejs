var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');//bodyparser
var db = require('../db');

router.get('/', (req, res)=>{
    res.render('users/index', {
        users: db.get('users').value()
    });
});//in ra users.

router.get('/search', (req, res)=> {
    var q = req.query.q;
    var matchedUsers = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    }); 
});//search

router.get('/create', (req, res) =>{
    res.render('users/create');
});//hiện ra create pug.

router.post('/create', (req, res)=> {
    db.get('users').push(req.body).write();//gửi db
    res.redirect('/users');
}); // post methor

module.exports = router;