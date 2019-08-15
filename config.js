function getEnvironment (environment) {
  if (environment === "LOCAL") {
    return "local";
  } else if (environment === "DEV") {
    return "development";
  } else if (environment === "PROD") {
    return "production";
  } else if (environment === undefined) {
    throw "Environment not defined";
  }
};



mongoProperties = {
  local: {
    connectionString: "mongodb://localhost:27020/middleware_database",
    options: { useNewUrlParser: true }
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
  getEnvironment,
  mongoProperties,
  serverProperties,
  externalAPIProperties
};
