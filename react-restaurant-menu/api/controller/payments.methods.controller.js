const PaymentMethod = require('../models/paymentmethods');

exports.registerPaymentMethod = (req, res) => {
    const newPaymentMethod = new PaymentMethod(req.body);
    newPaymentMethod.save((err, payment) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(201).json(payment);
    });
};

exports.listPaymentMethods = (req, res) => {
    PaymentMethod.find({}, (err, payments) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(200).json(payments);
    });
};

