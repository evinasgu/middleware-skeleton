var { getProducts, createProduct } = require("../data/product");

var productRoot = {
  products: () => {
    return getProducts();
  },
  createProduct: args  => {
    const { name, description } = args;
    const productResult = createProduct(name, description);
    return `Created: ${productResult.id} ${productResult.name} - ${productResult.description}`;
  },
  product: ({ id }) => {
    const products = getProducts();
    return products.find(p => p.id === id);
  }
};

module.exports = {
  productRoot
};
