var { getClients, addClient } = require("../data/client");

function getClientRoot(handler) {
  return clientRoot = {
    clients: () => {
      return getClients(handler);
    },
    createClient: (args) => {
      const { client } = args;
      return addClient(handler, client);
    }
  }; 
}

module.exports = {
  getClientRoot
};
