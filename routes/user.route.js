var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');//bodyparser
var db = require('../db');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

router.get('/', controller.index);//in ra users.

router.get('/cookie', (req, res, next)=>{
    res.cookie('user-id', 12345);
    res.send('Hello');
});

router.get('/search', controller.search);//search

router.get('/create', controller.create);

router.post('/create',validate.postCreate, controller.postCreate); // post methor

router.get('/:id', controller.id);

module.exports = router;