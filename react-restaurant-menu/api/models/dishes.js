const mongoose = require('mongoose');
const category = require('./categories');

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    description: {
        type: String,
        minLength: 10
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
        required: true,
        validate: {
            isAsync: true,
            validator: (value, callback) => {
                Category.find({name: value}, (err, docs) => {
                    callback(docs.length > 0);
                });
            },
            message: 'Category does not exists'
        }
    }
});

/*dishSchema.pre('save', async (next) => {
    const dish = this;
    if(dish.hasOwnProperty('photo')) {
    }
});*/

module.exports = mongoose.model('Dishes', dishSchema);