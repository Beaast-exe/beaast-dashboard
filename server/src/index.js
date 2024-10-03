const express = require('express');
const app = express();

const cors = require('cors');

const { port, corsPort } = require('./config').server;
const corsOptions = { origin: `http://localhost:${corsPort}` };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server running on port ${port}`));