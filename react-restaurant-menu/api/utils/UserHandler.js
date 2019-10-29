const jsonfile = require('jsonfile');
const fs = require('fs');
const crypter = require('bcrypt');

const SALT_ROUNDS = 10
const USERS_DIR = "./data/users/users_database.json"

class UserHandler {

	static getUsers() {
		let users = fs.readFileSync(USERS_DIR);
		let usersJson = JSON.parse(users);
		return usersJson;
	}

	static hashPassword(pass) {
		let salt = crypter.genSaltSync(SALT_ROUNDS);
		return crypter.hashSync(pass, salt);
	}

	static findUserByEmail(email) {
		let usersJson = this.getUsers();
		return usersJson.filter(user => user["email"] == email);
	}

	static saveUser(email, password) {
		if (this.findUserByEmail(email).length > 0) {
			return { "status": 422, "message": "El usuario ya está registrado." };
		}

		let usersJson = this.getUsers();
		let hashedPassword = this.hashPassword(password);

        usersJson.push({ "email": email, "hashedPassword": hashedPassword })
        fs.writeFileSync(USERS_DIR, JSON.stringify(usersJson));

        return { "status": 200, "message": "Usuario registrado exitosamente." };
	}

	static findHashedPasswordForEmail(email) {
		let usersJson = this.findUserByEmail(email);
		if (usersJson.length == 0) {
			return ''
		}
		else {
			return usersJson[0]['hashedPassword'];
		}
	}

	static validateUser(email, password) {
		let usersJson = this.getUsers();
		let hashedPassword = this.findHashedPasswordForEmail(email);
		if (crypter.compareSync(password, hashedPassword)) {
		    return { "status": 200, "message": "Usuario logueado." };
		}
		else {
		    return { "status": 422, "message": "Usuario o contraseña incorrectos." };
		}
	}
}

module.exports.model = {};
module.exports.model.UserHandler = UserHandler;