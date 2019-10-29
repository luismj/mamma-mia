const jsonfile = require('jsonfile');
const fs = require('fs');

function areEqualArrays(arr1, arr2) {
	return (JSON.stringify(arr1) == JSON.stringify(arr2));
}

class FileHandler {

	static writeFile(fileName, data) {
		jsonfile.writeFileSync(fileName, data);
	}

	static readFile(fileName) {
		return jsonfile.readFileSync(fileName);
	}

	static getFileNames(dir) {
		return fs.readdirSync(dir);
	}

	static getFilesData(dir) {
		let fileNames = this.getFileNames(dir);
		let results = []

		fileNames.forEach(function (fileName) {
			results.push(FileHandler.readFile(`${dir}${fileName}`))
		});
		return results;
	}

	static mazeAlreadyExists(dir, dataToSave) {
		let existingMazes = this.getFilesData(dir);
		existingMazes = existingMazes.map(json => json['cells']);

		dataToSave = JSON.parse(dataToSave)['cells'];

		for (var i = 0; i < existingMazes.length; i++) {
			if (areEqualArrays(existingMazes[i], dataToSave)) {
				return true;
			}
		}
		return false;
	}
}

module.exports.model = {};
module.exports.model.FileHandler = FileHandler;