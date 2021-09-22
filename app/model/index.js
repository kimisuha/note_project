const mongoose = require("mongoose");
const CreateContactModel = require("./contact.model");

const db = {};
db.mongoose = mongoose;
db.Contact = CreateContactModel(mongoose);

module.exports(db);