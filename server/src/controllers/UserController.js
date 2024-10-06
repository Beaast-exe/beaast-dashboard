const User = require('../models/User');

module.exports = {
	async index(req, res) {
		const users = await User.findAll();

		return res.json(users);
	},

	async store(req, res) {
		const { email, username, password, group } = req.body;

		const user = await User.create({ username, email, password, group });

		return res.json(user);
	}
};