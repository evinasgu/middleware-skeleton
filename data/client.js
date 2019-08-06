let clients = [];

const addClient = client => {
  const nextId = clients.length === 0 ? 1 : clients[clients.length - 1].id + 1;
  clients = [...clients, { ...client, id: nextId }];
  return "success";
};

const getClients = () => {
  return clients;
};

module.exports = {
  addClient,
  getClients
};
