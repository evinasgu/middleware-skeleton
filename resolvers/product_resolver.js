var { getProducts, addProduct } = require("../data/product");

var productRoot = {
  products: () => {
    return getProducts();
  },
  addProduct: args  => {
    const { name , sku , price } = args;
    const productResult = addProduct(name, sku , price);
    return `Created: ${productResult.name} - SKU ${productResult.sku}`;
  },
  product: ({ id }) => {
    const products = getProducts();
    return products.find(p => p.id === id);
  }
};

module.exports = {
  productRoot
};
