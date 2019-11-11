const mongoose = require('mongoose');

const dailyMenuSchema = mongoose.Schema({
    option: {
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    dishes: [{
        dish: {
            name: {
                type: String,
                required: true
            },
            kind: {
                type: String,
                required: true
            }
        }
    }]
});

module.exports = mongoose.model('DailyMenu', dailyMenuSchema);