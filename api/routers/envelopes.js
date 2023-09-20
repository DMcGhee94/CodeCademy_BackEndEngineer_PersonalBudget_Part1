const express = require('express');
const envelopeRouter = express.Router();
const type = "envelopes";

const {
    getAllFromDb,
    getTypeFromDb,
    getTypeFromDbWithId,
    getMaxIdOfType,
    addRecordToDb,
    deleteFromDbById,
    updateRecordInDb,
    transferBalanceInDb
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

envelopeRouter.get('/:id', (req, res, next) => {
    if (Object.hasOwn(req, "idRecord")) {
        res.send(req.idRecord);
    } else {
        res.status(404).send();
    };
});

envelopeRouter.post('/', (req, res, next) => {
    const newEnvelope = addRecordToDb(type, req.body);

    if (newEnvelope) {
        res.status(201).send(newEnvelope);
    } else {
        res.status(401).send();
    };
});

envelopeRouter.delete('/:id', (req, res, next) => {
    if (Object.hasOwn(req, "idRecord")) {
        const deleteRecord = deleteFromDbById(type, req.idRecord);

        if (deleteRecord) {
            res.send();
        } else {
            res.status(400).send();
        };        
    } else {
        res.status(404).send();
    };
});

envelopeRouter.put('/:id', (req, res, next) => {
    if (Object.hasOwn(req, "idRecord")) {
        const updateRecord = updateRecordInDb(type, req.idRecord, req.body);

        if (updateRecord) {
            res.send();
        } else {
            res.status(400).send();
        }
    } else {
        res.status(404).send();
    };
});

envelopeRouter.post('/transfer/:from/:to', (req, res, next) => {
    const fromRecord = getTypeFromDbWithId(type, req.params.from);
    const toRecord = getTypeFromDbWithId(type, req.params.to);

    const transferResponse = transferBalanceInDb(type, fromRecord, toRecord, req.body.balChange);

    if (transferResponse) {
        res.send();
    } else {
        res.status(400).send();
    };
});

module.exports = envelopeRouter;