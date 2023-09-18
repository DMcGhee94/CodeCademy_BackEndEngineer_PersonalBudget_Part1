const express = require('express');
const envelopeRouter = express.Router();

const envelopes = {};
var lastEnvelopeId = 0;

envelopeRouter.param('id', (req, res, next, id) => {
    const envelope = 
});

envelopeRouter.get('/', (req, res, next) => {
    res.send(envelopes);
});

envelopeRouter.post('/', (req, res, next) => {
    
});