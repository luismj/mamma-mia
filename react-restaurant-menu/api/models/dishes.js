const mongoose = require('mongoose');
const category = require('./categories');

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    isCeliac: {
        type: Boolean
    },
    isVegetarian: {
        type: Boolean
    },
    photo: {
        type: String
    },
    categoryName: {
        type: String,
        required: true
        /*validate: {
            isAsync: true,
            validator: (v, callback) => {
                if(Category.findByName(v)) {

                }
                callback(isValid);
            } 
        }*/
    }
});

module.exports = mongoose.model('Dishes', dishSchema);