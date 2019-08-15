//const { getDb } = require("./db");

let clients = [];

const addClient = client => {
  const nextId = clients.length === 0 ? 1 : clients[clients.length - 1].id + 1;
  clients = [...clients, { ...client, id: nextId }];
  return "success";
};

const getClients = () => {
  const db = app.getDb();
  const collection = db.collection('clients');
  result = [];
  
  collection.find().toArray((err, items) => {
    result.push(items)
  });

  return result;
};

module.exports = {
  addClient,
  getClients
};
