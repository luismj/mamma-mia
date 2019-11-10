const dishes = require('express').Router();
const controller = require('../controller/dishes.controller');
const auth = require('../middleware/auth');

dishes.route('/')
    .get(controller.listDishes)
    .post(auth, controller.saveDish);

dishes.route('/:id')
    .get(controller.findDishById)
    .put(auth, controller.modifyDish);

dishes.route('/category/:name')
    .get(controller.listDishesByCategory);

module.exports = dishes;