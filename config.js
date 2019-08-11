mongoProperties = {
  local: {
    connectionString: ""
  },
  development: {
    connectionString: process.env.MONGO_CONNECTION_STRING      
  },
  production: {
    connectionString: process.env.MONGO_CONNECTION_STRING
  }
};

serverProperties = {
  local: {
    port: 4000
  },
  development: {
    port: process.env.SERVER_PORT
  },
  production: {
    port: process.env.SERVER_PORT
  }
};

externalAPIProperties = {

};

module.exports = {
  mongoProperties,
  serverProperties,
  externalAPIProperties
};
