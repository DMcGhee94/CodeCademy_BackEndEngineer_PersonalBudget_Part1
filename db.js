const billsEnvelope = {
    id: "1",
    name: "bills",
    currentBalance: 1000
};

const db = {
    allEnvelopes: [billsEnvelope]
};

const getAllFromDb = () => {
    return db;
};

const getTypeFromDb = (type) => {
    switch (type) {
        case ("envelopes"):
            return db.allEnvelopes;
            break;
        default:
            return null;
            break;
    };
};

const getTypeFromDbWithId = (type, id) => {
    const instance = getTypeFromDb(type);

    if (!isNaN(id)) {
        return instance.filter((element => element.id === id));
    } else {
        return null;
    };
}; 

const getMaxIdOfType = (type) => {
    const allRecords = getTypeFromDb(type);
    var largestId = 0;
    var largestIdObject = null;

    for (let i = 0; i < allRecords.length; i++) {
        let currentId = parseInt(allRecords[i].id);

        if (currentId > largestId) {
            largestId = currentId;
            largestIdObject = allRecords[i];
        };
    };

    return {largestId, largestIdObject};
};

const findRecordIndexInTable = (table, record) => {
    return table.indexOf(record[0]);
};

const addRecordToDb = (type, body) => {
    const newId = (getMaxIdOfType(type).largestId + 1).toString();
    const envelopes = getTypeFromDb(type);
    const newRecord = {
        id: newId,
        name: body.name,
        currentBalance: 0
    };

    envelopes.push(newRecord);

    return newRecord;
};

const deleteFromDbById = (type, record) => {
    const instance = getTypeFromDb(type);

    const recordIndex = findRecordIndexInTable(instance, record);

    if (recordIndex !== -1) {
        db.allEnvelopes.splice(recordIndex, 1);
        return true;
    } else {
        return null;
    };
};

const updateRecordInDb = (type, record, body) => {
    const instance = getTypeFromDb(type);

    const recordIndex = findRecordIndexInTable(instance, record);

    if (recordIndex !== -1) {
        db.allEnvelopes[recordIndex] = body;
        return db.allEnvelopes[recordIndex];
    } else {
        return null;
    };
};

module.exports = {
    getAllFromDb,
    getTypeFromDb,
    getTypeFromDbWithId,
    getMaxIdOfType,
    addRecordToDb,
    deleteFromDbById,
    updateRecordInDb
};