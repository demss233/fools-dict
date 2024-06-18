const mongoose = require('mongoose')
const userModel = require('../../models/word');

const presentInDatabase = async (word) => {
	try {
		const data = await userModel.findOne({name: word}).then((response) => {
			return (response !== undefined && response.name === word);
		}).catch(exception => console.error(exception))
	} catch(error) {
		console.error(error);
	}
}

module.exports = presentInDatabase;
