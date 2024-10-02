const express = require('express');
const app = express();

const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { host, user, password, database } = require('./config')

const db = mysql.createPool({ host, user, password, database });

app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
	const { email, password } = req.body;

	db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
		if (err) {
			res.send(err);
		}

		if (result.length == 0) {
			bcrypt.hash(password, saltRounds, (err, hash) => {
				db.query(
					'INSERT INTO users (email, password) VALUE (?,?)',
					[email, hash],
					(error, response) => {
						if (err) {
							res.send(err);
						}

						res.send({ msg: 'User created successfully!' });
					}
				);
			})
		}
	});
});

app.post('/login', (req, res) => {
	const { email, password } = req.body;

	db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
		if (err) {
			res.send(err);
		}

		if (result.length > 0) {
			bcrypt.compare(password, result[0].password, (error, response) => {
				if (error) {
					res.send(error);
				}

				if (response == true) {
					res.send(response);
				} else {
					res.send({ msg: 'Invalid email or password.' });
				}
			});
		} else {
			res.send({ msg: 'There is no user registered with that email.' });
		}
	});
});

app.listen(3001, () => console.log('Server listening on port 3001'));