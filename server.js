const express = require('express');
const app = express();

const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const apiRouter = require('./api/api.js');
app.use('/api', apiRouter);

app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`)
});