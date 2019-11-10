const Category = require('../models/categories');

exports.createCategory = (req, res) => {
    const newCategory = new Category(req.body);
    newCategory.save((err, category) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(201).json(category);
    });
};

exports.listCategories = (req, res) => {
    Category.find({}, (err, categories) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(200).json(categories);
    });
};

exports.updateCategory = (req, res) => {
    Category.findById(req.params.id, (err, category) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        if(!category) {
            return res.status(404).send({error: 'Category Not Found'});
        }
        category.name = req.body.name;
        category.save((err, category) => {
            if(err) {
                return res.status(500).send({error: err});
            }
            res.status(200).json(category);
        });
    });
};

exports.findByName = (req, res) => {
    const category = Category.findByName(req.params.name)
        .then(category => {
            res.status(200).json(category);
        })
        .catch(err => console.log(err));
};