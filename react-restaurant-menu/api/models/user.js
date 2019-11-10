const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
});

userSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email: email });
    if(!user) {
        throw new Error({error: 'Invalid login credentials'});
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatch)
    if(!isPasswordMatch) {
        throw new Error({error: 'Invalid login credentials'});
    }
    return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;