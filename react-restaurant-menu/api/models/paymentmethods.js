const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    promotion: {
        name: {
            type: String,
            required: true
        },
        discount: {
            type: Number,
            max: 100
        }
    }
});


module.exports = mongoose.model('PaymentMerthod', paymentSchema); 