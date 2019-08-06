let products = [
  {
    id: 0,
    name: "Sony Bravia TV",
    description: "product0"
  },
  {
    id: 1,
    name: "Sony Playstation 4",
    description: "product1"
  },
  {
    id: 2,
    name: "Nintendo Switch",
    description: "product2"
  },
  {
    id: 3,
    name: "Xbox One",
    description: "product3"
  }
];

const createProduct = (name, description) => {
  const id = products[products.length - 1].id + 1;  
  const productToSave = { id, name, description };
  products = [...products, productToSave];
  return { ...productToSave };
};

const getProducts = () => {
  return products;
};

module.exports = {
  getProducts,
  createProduct
};
