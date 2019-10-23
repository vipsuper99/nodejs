var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');//bodyparser
var db = require('../db');
var controller = require('../controllers/user.controller');

router.get('/', controller.index);//in ra users.

router.get('/search', controller.search);//search

router.get('/create', controller.create);

router.post('/create', controller.postCreate); // post methor

router.get('/:id', controller.id);

module.exports = router;