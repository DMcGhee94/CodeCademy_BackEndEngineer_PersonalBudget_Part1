const envelope = {};

const db = {
    allEnvelopes: envelope
};

const getAllFromDb = (type) => {
    switch (type) {
        case 'envelopes':
            return db.allEnvelopes;
            break;
        default:
            return null;
    };
};

const getIdFromDb = (type, id) => {
    const model = getAllFromDb(type);
    if (model === null) {
        return null;
    } else {
        return model.find((element) => {
            return element.id === id;
        }) ;    
    };
};

const addNewToDb = (type, body) => {
    
};