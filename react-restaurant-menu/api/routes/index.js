const routes = require('express').Router();
const userRoutes = require('./user.routes');
const commentsRoutes = require('./comment.routes');
const categoriesRoutes = require('./categories.routes');
const dishesRoutes = require('./dishes.routes');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'It s Alive!' });
});

routes.use('/users', userRoutes);
routes.use('/comments', commentsRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/dishes', dishesRoutes);

module.exports = routes;