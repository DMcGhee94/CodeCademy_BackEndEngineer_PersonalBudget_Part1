const express = require('express');
const envelopeRouter = express.Router();
const type = "envelopes";

const {
    getAllFromDb,
    getTypeFromDb,
    getTypeFromDbWithId,
    getMaxIdOfType,
    addRecordToDb
} = require('../../db.js');

envelopeRouter.param('id', (req, res, next, id) => {
    const record = getTypeFromDbWithId(type, id);

    if (record) {
        req.idRecord = record;
        next();
    } else {
        res.status(404).send();
    };
});

envelopeRouter.get('/', (req, res, next) => {
    res.send(getTypeFromDb(type));
});

envelopeRouter.post('/', (req, res, next) => {
    const newEnvelope = addRecordToDb(type, req.body);

    if (newEnvelope) {
        res.status(201).send(newEnvelope);
    } else {
        res.status(401).send();
    };
});

module.exports = envelopeRouter;