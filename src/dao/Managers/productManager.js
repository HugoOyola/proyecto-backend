import fs from "fs";

export default class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = [];
    this.productId = 1;
    this.readProductsFromFile();
  }
  readProductsFromFile() {
    try {
      const data = fs.readFileSync(this.filePath);
      this.products = JSON.parse(data);
      this.productId = this.products.length + 1;
    } catch (err) {
      console.error(`Error al leer el archivo ${this.filePath}: ${err}`);
    }
  }
  saveProductsToFile() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.products));
    } catch (err) {
      console.error(`Error al escribir el archivo ${this.filePath}: ${err}`);
    }
  }
  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Todos los campos son requeridos");
      return;
    }
    if (this.getProductByCode(product.code)) {
      console.log("El código del producto ya existe");
      return;
    }
    product.id = this.productId++;
    this.products.push(product);
    this.saveProductsToFile();
  }
  getProducts() {
    return this.products;
  }
  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.log("No se ha encontrado el Producto");
    }
    return product;
  }
  getProductByCode(code) {
    return this.products.find((p) => p.code === code);
  }
  updateProduct(id, productData) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      console.log("No se ha encontrado el Producto");
      return;
    }
    const product = { ...this.products[productIndex], ...productData };
    this.products[productIndex] = product;
    this.saveProductsToFile();
  }
  deleteProduct(id) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      console.log("No se ha encontrado el Producto");
      return;
    }
    this.products.splice(productIndex, 1);
    this.saveProductsToFile();
  }
}
