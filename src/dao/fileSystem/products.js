const productManager = new ProductManager('products.json');
// const productManager = new ProductManager('./src/Files/products.json');

// productManager.addProduct({
//   title: 'iPhone',
//   description: 'iPhone 14 Pro',
//   price: 999,
//   thumbnail: 'iphone.png',
//   code: 'APPLE001',
//   stock: 25,
// });
// productManager.addProduct({
//   title: 'Teclado',
//   description: 'Teclao Logitech',
//   price: 300,
//   thumbnail: 'teclado.png',
//   code: 'LOGITECH001',
//   stock: 30,
// });

// productManager.addProduct({
//   title: 'Samsung Galaxy',
//   description: 'Samsung Galaxy Note',
//   price: 899,
//   thumbnail: 'samsung.png',
//   code: 'SAMSUNG001',
//   stock: 15,
// });
// productManager.addProduct({
//   title: 'Samsung Galaxy',
//   description: 'Samsung Galaxy Note',
//   price: 899,
//   thumbnail: 'samsung.png',
//   code: 'SAMSUNG001',
//   stock: 15,
// });

const products = productManager.getProducts();
console.log(products);
// const products = productManager.getProducts();
// console.log(products);

const productById = productManager.getProductById(2);
console.log(productById);
// const productById = productManager.getProductById(2);
// console.log(productById);

const productByCode = productManager.getProductByCode('APPLE001');
console.log(productByCode);
// const productByCode = productManager.getProductByCode('APPLE001');
// console.log(productByCode);

productManager.updateProduct(1, { stock: 30 });
console.log(productManager.getProducts());
// productManager.updateProduct(1, { stock: 30 });
// console.log(productManager.getProducts());

productManager.deleteProduct(2);
console.log(productManager.getProducts());
// productManager.deleteProduct(2);
// console.log(productManager.getProducts());