const users = require('express').Router();
const controller = require('../controller/user.controller');
const auth = require('../middleware/auth');


users.route('/')
     .post(controller.registerUser);

users.route('/login')
     .post(controller.login);

users.route('/logout').get(auth, controller.logout);

module.exports = users;