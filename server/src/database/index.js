const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Address.init(sequelize);

Address.associate(sequelize.models);
User.associate(sequelize.models);

module.exports = sequelize;