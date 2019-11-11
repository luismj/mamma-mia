const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    document: {
        type: String,
        required: true
    },
    total: {
        type: Number
    },
    detail:[{
        dish: {
            name:{
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    }]
});

module.exports = mongoose.model('Order', orderSchema);