const User = require('../models/user');
const auth = require('../middleware/auth');


exports.registerUser = (req, res) => {
    const newUser = new User(req.body);
    // Nota mental: Esto creo que se puede poner como una Promise y se vería mejor. Si se logra: revisar los demás controllers
    newUser.save((err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        console.log('Que haces aqui??');
        const token = user.generateAuthToken();
        res.status(201).send(user);
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({ error: 'Invalid Credentials. Please check!' });
        }
        const token = await user.generateAuthToken();
        res.status(200).json({token: token});
    } catch(err) {
        res.status(500).send({error: err});
    }  
};
// Si, lo puse yo, si deberia ser eliminado, igual tengo que mejorar el manejo de tokens
exports.logout = (req, res) => {
    res.status(200).send();
}