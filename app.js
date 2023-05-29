const express = require('express');
const ProductManager = require('./productManager.js');

const app = express();
const productManager = new ProductManager('./productos.json');

// Endpoint para obtener todos los productos o limitar el número de resultados
app.get('/products', (req, res) => {
  const limit = req.query.limit; // Obtener el valor del parámetro "limit"

  let products = productManager.getProducts();

  if (limit) {
    const parsedLimit = parseInt(limit, 10);
    if (!isNaN(parsedLimit)) {
      products = products.slice(0, parsedLimit); // Limitar el número de productos según el valor recibido en "limit"
    }
  }

  res.json({ products });
});

// Endpoint para obtener un producto por ID
app.get('/products/:pid', (req, res) => {
  const productId = parseInt(req.params.pid, 10); // Obtener el ID del producto de los parámetros de la URL

  const product = productManager.getProductById(productId);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Puerto en el que se ejecutará el servidor
const port = 8080;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
