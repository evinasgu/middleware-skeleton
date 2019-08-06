var { buildSchema } = require('graphql');

// Here we have a schema using GraphQL language
var schema = buildSchema(`
  type Product {
    name: String,
    description: String,
    id: Int
  },
  type Client {
    name: String,
    id: Int
  },
  input ClientInput {
    name: String
  },
  type Query {
    products: [Product],
    clients: [Client],
    product(id: Int!): Product
  },
  type Mutation {
    createProduct(name: String!, description: String!): String,
    createClient(client: ClientInput!): String
  }
`);

module.exports = schema;

