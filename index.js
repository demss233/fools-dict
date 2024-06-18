const connect = require('./utils/init')
const path = require('path');
const fs = require('fs');
const {pushToDatabase, pushFromDatabase, viewDatabase} = require('./utils/crud');
const userModel = require('./models/word')

const handle = async (callback) => {
	connect();

	const args = process.argv.slice(2);
	const word = args[1];
	if(args[0] === "add") {
		pushToDatabase(word);
	} else if(args[0] === "remove") {
		pushFromDatabase(word);
	} else if(args[0] === "view") {
		await viewDatabase();
	} else {
		console.log("There are just three commands for you to use\n(i) add\n(ii) remove\n(iii) view\n");
	}

	await callback();
}

const update = async () => {
	await userModel.find({}).then((lazyResponse) => {
		let buffer = new String();
		for(let i = 0; i < lazyResponse.length; ++i) {
			buffer += lazyResponse[i].name;
			buffer += '\n';
		}
		fs.writeFile('db.txt', buffer.length ? buffer : "oops! looks like the database is empty!", (error) => {
			if(error) {
				console.error(error);
			}
		})
	}).catch((error) => {
		console.error(error);
	})
}

handle(update);
