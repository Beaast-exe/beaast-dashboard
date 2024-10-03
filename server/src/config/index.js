module.exports = {
	server: {
		port: 3000,
		corsPort: 3001
	},
	database: {
		host: '127.0.0.1',
		user: 'Dashboard',
		password: 'dashboard.pass.db',
		database: 'Dashboard',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	}
}