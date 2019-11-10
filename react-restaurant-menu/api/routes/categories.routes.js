const categories = require('express').Router();
const auth = require('../middleware/auth');
const controller = require('../controller/categories.controller');

categories.route('/')
        .get(controller.listCategories)
        .post(auth, controller.createCategory)
        .put(auth, controller.updateCategory);

        //Eliminar luego de culminada la rueba
categories.route('/:name').get(controller.findByName);

module.exports = categories;