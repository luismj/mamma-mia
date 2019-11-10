const Dish = require('../models/dishes');

exports.saveDish = (req, res) => {
    const newDish = new Dish(req.body);
    newDish.save((err, dish) => {
        if(err) {
            res.status(500).send({error: err});
        }
        res.status(201).json(dish);
    });
};

exports.listDishes = (req, res) => {
    Dish.find({}, (err, dishes) => {
        if(err) {
            res.status(500).send({error: err});
        }
        res.status(200).json(dishes);
    });
};

exports.listDishesByCategory = (req, res) => {
    Dish.find({categoryName: req.params.name}, (err, dishes) => {
        if(err) {
            res.status(500).send({error: err});
        }
        res.status(200).json(dishes);
    });
};

exports.modifyDish = (req, res) => {
    Dish.findById(req.params.id, (err, dish) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        if(!dish) {
            return res.status(404).send({error: 'Dish Not Found'});
        }
        dish.name = req.body.name;
        dish.price = req.body.price;
        dish.isCeliac = req.body.isCeliac;
        dish.isVegetarian = req.body.isVegetarian;
        dish.photo = req.body.photo;
        dish.categoryName = req.body.categoryName;
        dish.save((err, dish) => {
            if(err) {
                return res.status(500).send({error: err});
            }
            res.status(200).json(dish);
        })
    });
};

exports.findDishById = (req, res) => {
    Dish.findById(req.params.id, (err, dish) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        if(!dish) {
            return res.status(404).send({error: 'Dish Not Found'});
        }
        res.status(200).json(dish);
    });
};