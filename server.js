const express = require('express');
const { router } = require('./routes/router')

const app = express();

app.use(express.json())

app.use('/', router)

const port = 5001;

app.listen(port, () => console.log(port))