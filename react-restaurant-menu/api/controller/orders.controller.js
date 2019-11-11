const Order = require('../models/orders');

exports.saveOrder = (req, res) => {
    const newOrder = new Order(req.body);
    newOrder.save((err, order) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(201).json(order);
    });
};

exports.listOrderById = (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        if(!order) {
            return res.status(404).send({error: 'Order Not Found'});
        }
        res.status(200).json(order);
    });
};

exports.listOrderByDocument = (req, res) => {
    Order.find({document: req.params.doc}, (err, order) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        if(!order) {
            return res.status(404).send({error: 'Order Not Found'});
        }
        res.status(200).json(order)
    });
};

exports.removeOrder = (req, res) => {
    Order.deleteOne(req.params.id, (err) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(204).send();
    });
};