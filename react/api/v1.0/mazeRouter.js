let express = require('express');
let Maze = require('../model/maze').model.Maze;
let FileHandler = require('../utils/FileHandler').model.FileHandler;
let UserHandler = require('../utils/UserHandler').model.UserHandler;
let mazeRouter = express.Router();

const MAZES_DIR = "./data/saved_mazes/"

mazeRouter.route('/').post((request, response) => {
    let structure = request.body;
    let maze = new Maze(structure);
    let result = maze.validate();

    if(result == "Valid maze") response.status('200').send(result);
    else response.status('422').send(result);
});

mazeRouter.route('/').get(
    (request, response) => response.send('Trabajo Practico 0 - Validador de Laberintos')
)

mazeRouter.route('/save').post((request, response) => {
    let jsonData = request.body;
    let fileName = jsonData['fileName'];

    if (FileHandler.mazeAlreadyExists(MAZES_DIR, JSON.stringify(jsonData))) {
        let message = "NO SE GUARDÓ: Ya existe un laberinto de igual forma."
        response.status('422').send(message);
    } else {
        FileHandler.writeFile(`${MAZES_DIR}${fileName}.json`, jsonData);

        let message = "Laberinto Guardado";
        response.status('200').send(message);
    }
});

mazeRouter.route('/getMazes').get((request, response) => {
    let results = FileHandler.getFilesData(MAZES_DIR);
    response.status('200').send(results);
});

mazeRouter.route('/saveUser').post((request, response) => {
    let jsonData = request.body;
    let email = jsonData['email'];
    let password = jsonData['password'];

    let result = UserHandler.saveUser(email, password);
    response.status(result['status']).send(result['message']);
});

mazeRouter.route('/login').post((request, response) => {
    let jsonData = request.body;
    let email = jsonData['email'];
    let password = jsonData['password'];

    let result = UserHandler.validateUser(email, password);
    response.status(result['status']).send(result['message']);
});

mazeRouter.use((req, res) => {
  console.log(res.body)
  res.status(422).send('');
})

module.exports = mazeRouter;