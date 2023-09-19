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

const getMaxIdOfType = (type) => {
    const allRecords = getTypeFromDb(type);
    var largestId = 0;
    var largestIdObject = null;

    for (let i = 0; i < allRecords.length; i++) {
        let currentId = allRecords[i].id;

        if (currentId > largestId) {
            largestId = currentId;
            largestIdObject = allRecords[i];
        };
    };

    return {largestId, largestIdObject};
};