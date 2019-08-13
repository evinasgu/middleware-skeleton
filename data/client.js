const mongoModel = require("../connection_db");

const addClient = client => {
  var clientModel = new mongoModel.clientModel({name: client.name , age: client.age});
  clientModel.save();
};

const getClients = () => {
  return mongoModel.clientModel.find().exec();
};

module.exports = {
  addClient,
  getClients
};
