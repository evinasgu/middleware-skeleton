var { getClients, addClient } = require("../data/client");

var clientRoot = {
  clients: () => {
    return getClients();
  },
  createClient: args => {
    const { client } = args;
    return addClient(client);
  }
};

module.exports = {
  clientRoot
};
