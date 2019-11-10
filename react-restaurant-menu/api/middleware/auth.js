const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = (req, res, next) => {
    let token = req.header('Authorization');
    if(!token) {
        return res.status(403).send({error: 'Forbidden'});
    }
    token = token.replace(/^Bearer\s/, '');
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).send({error: 'Not Authorized to access this resource'});            
        }

        User.findOne({_id: decoded._id, 'tokens.token': token}, (err, user) => {
            if(err) {
				return res.status(500).send({error: 'Error on the server'})
			}
			if(!user) {
				return res.status(404).send({error: 'User not found'})
			}
			next();
        });
    });
};

module.exports = auth;