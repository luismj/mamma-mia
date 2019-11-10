const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

categorySchema.statics.findByName = (name) => {
    return Category.findOne({name: name});
}

const Category = mongoose.model('Categories', categorySchema);
module.exports = Category;