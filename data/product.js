const mongoModel = require("../connection_db");

// let products = [
//   {
//     id: 0,
//     name: "Sony Bravia TV",
//     description: "product0"
//   },
//   {
//     id: 1,
//     name: "Sony Playstation 4",
//     description: "product1"
//   },
//   {
//     id: 2,
//     name: "Nintendo Switch",
//     description: "product2"
//   },
//   {
//     id: 3,
//     name: "Xbox One",
//     description: "product3"
//   }
// ];

const addProduct = product => {
  console.log(product);
  var productModel = new mongoModel.productModel({name: product.name , sku: product.sku , price: product.price});
  productModel.save();
  // const id = products[products.length - 1].id + 1;  
  // const productToSave = { id, name, description };
  // products = [...products, productToSave];
  // return { ...productToSave };
};

const getProducts = () => {
  return mongoModel.productModel.find().exec();
};

module.exports = {
  getProducts,
  addProduct
};
