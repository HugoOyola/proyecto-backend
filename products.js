const ProductManager = require('./productManager.js');

const productManager = new ProductManager('productos.json');

// productManager.addProduct({
//   title: 'Producto 1',
//   description: 'Descripción del producto 1',
//   price: 9.99,
//   thumbnail: 'ruta/imagen1.jpg',
//   code: 'ABC123',
//   stock: 10,
// });

// productManager.addProduct({
//   title: 'Producto 2',
//   description: 'Descripción del producto 2',
//   price: 19.99,
//   thumbnail: 'ruta/imagen2.jpg',
//   code: 'DEF456',
//   stock: 5,
// });

// const allProducts = productManager.getProducts();
// console.log(allProducts);

// const product = productManager.getProductById(2);
// console.log(product);

// productManager.updateProduct(1, { price: 14.99 });

// productManager.deleteProduct(11);