const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

const port = process.env.PORT;
createServer();

function createServer() {
    /*Siento que esto puede ir en middleware, pero sinceramente, ya no pienso, además ya funciona.*/ 
    app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Credentials', "true");
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', 'GET,POST','PUT','DELETE');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization, api_key, token');
      if ('OPTIONS' == req.method) {
          res.sendStatus(200);
      } else {
          next();
      }
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // app.use(express.static(path.join(__dirname, 'static')));
    app.use('/', routes);
    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

    var server = app.listen(port, () => {
      console.log("Express server listening on port %d ", port);
    });

}