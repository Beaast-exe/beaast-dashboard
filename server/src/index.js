const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

const { port } = require('./config/server');

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}`));