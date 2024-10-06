const { Model, DataTypes } = require('sequelize');

class User extends Model {
	static init(sequelize) {
		super.init({
			email: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			group: DataTypes.INTEGER
		}, { sequelize });
	}

	static associate(models) {
		this.hasMany(models.Address, {
			foreignKey: 'user_id',
			as: 'addresses'
		});
	}
}

module.exports = User;