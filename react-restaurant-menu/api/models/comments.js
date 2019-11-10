const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        max: 5
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Comments', commentSchema);