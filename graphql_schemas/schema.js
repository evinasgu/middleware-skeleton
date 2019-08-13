var { buildSchema } = require('graphql');

// Here we have a schema using GraphQL language
var schema = buildSchema(`
  type Product {
    name: String,
    sku: Int,
    price: Float
  },
  type Client {
    name: String,
    age: Int
  },
  input ClientInput {
    name: String,
    age: Int
  },
  input ProductInput {
    name: String,
    sku: Int,
    price: Int
  },
  type Query {
    products: [Product],
    clients: [Client],
    product(id: Int!): Product
  },
  type Mutation {
    createProduct(product: ProductInput!): String,
    createClient(client: ClientInput!): String
  }
`);

module.exports = schema;

