const express = require('express');
const api = express.Router();

const envelopeRouter = require('./routers/envelopes.js');

api.use('/envelopes', envelopeRouter);

module.exports = api;