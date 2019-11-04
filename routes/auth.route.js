var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');//bodyparser
var db = require('../db');
var controller = require('../controllers/auth.controller');

router.get('/login', controller.login);//in ra users.

router.post('/login', controller.postLogin);

module.exports = router;