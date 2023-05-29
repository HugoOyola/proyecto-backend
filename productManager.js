const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(product) {
    const products = this.getProductsFromFile();

    const { title, description, price, thumbnail, code, stock } = product;

    // Validar campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log('Todos los campos son obligatorios.');
      return;
    }

    // Generar un nuevo ID autoincrementable
    const newProductId = this.getNextProductId();
    const newProduct = { id: newProductId, ...product };

    products.push(newProduct);

    this.saveProductsToFile(products);

    console.log('Producto agregado correctamente.');
  }

  getProducts() {
    return this.getProductsFromFile();
  }

  getProductById(id) {
    const products = this.getProductsFromFile();
    const product = products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log('Producto no encontrado.');
    }
  }

  updateProduct(id, updatedFields) {
    const products = this.getProductsFromFile();
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      console.log('Producto no encontrado.');
      return;
    }

    const updatedProduct = { ...products[productIndex], ...updatedFields };
    products[productIndex] = updatedProduct;

    this.saveProductsToFile(products);

    console.log('Producto actualizado correctamente.');
  }

  deleteProduct(id) {
    const products = this.getProductsFromFile();
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      console.log('Producto no encontrado.');
      return;
    }

    products.splice(productIndex, 1);

    this.saveProductsToFile(products);

    console.log('Producto eliminado correctamente.');
  }

  getNextProductId() {
    const products = this.getProductsFromFile();
    if (products.length === 0) {
      return 1;
    }
    const lastProduct = products[products.length - 1];
    return lastProduct.id + 1;
  }

  getProductsFromFile() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  saveProductsToFile(products) {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(this.path, data);
  }
}

module.exports = ProductManager;
