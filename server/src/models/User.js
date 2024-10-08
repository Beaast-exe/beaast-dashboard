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

		this.belongsToMany(models.Tech, {
			foreignKey: 'user_id',
			through: 'user_techs',
			as: 'techs'
		});
	}
}

module.exports = User;