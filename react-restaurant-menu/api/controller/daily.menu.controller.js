const DailyMenu = require('../models/dailymenu');

exports.saveDailyMenu = (req, res) => {
    const newMenu = new DailyMenu(req.body);
    DailyMenu.save((err, menu) => {
        if(err) {
            return res.status(500).send({error: err});
        }
        res.status(201).json(menu);
    });
};

exports.updateMenu = (req, res) => {
    DailyMenu.find;
};