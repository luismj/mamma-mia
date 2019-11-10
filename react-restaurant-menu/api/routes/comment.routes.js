const comments = require('express').Router();
const controller = require('../controller/comment.controller');

comments.route('/')
        .get(controller.getComments)
        .post(controller.saveComment);


module.exports = comments;