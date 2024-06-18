const mongoose = require('mongoose');
const wordModel = require('../models/word');
const presentInDatabase = require('./peers/deps');

const pushToDatabase = async (word) => {
		await wordModel.findOne({name: word}).then(async (response) => {
			if(response) {
				console.log("this word is already present in the database.\npress <ctrl-c> to quit.")
			} else {
				const newModel = new wordModel({
					name: word,
				})
				await newModel.save();
				console.log("added!\nPress <CTRL-C> to quit.")
			}
		}).catch(error => console.error(error));
}

const pushFromDatabase = async (word) => {
		await wordModel.findOne({name: word}).then(async (response) => {
			if(response) {
				await wordModel.deleteOne({name: word});
				console.log("removed!\nPress <ctrl-c> to quit.");
			} else {
				console.log("There is no such word in the database!\npress <ctrl-c> to quit.")
			}
		}).catch(error => console.error(error));
}

const viewDatabase = async () => {
	try {
		const db = await wordModel.find({}).then((data) => {
			if(!data.length) {
				console.log("oops! looks like there is nothing in the database, try adding something with the add command.\nFor example: words add food");
			}
			else {
				for(let i = 0; i < data.length; ++i) {
					console.log(data[i].name);
				}
			}
			console.log("press <ctrl-c> to quit!")
		}).catch(exception => console.error(exception))
	} catch(error) {
		console.error(error);
	}
}

module.exports = {pushToDatabase, pushFromDatabase, viewDatabase};
