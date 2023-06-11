import fs from "fs";
import express from "express";
import ProductManager from "./dao/Managers/ProductManager.js";

const app = express();

const productManager = new ProductManager("./src/dao/fileSystem/products.json");

app.get("/products", (req, res) => {
  const limit = req.query.limit;
  let products;

  try {
    const data = fs.readFileSync("./src/dao/fileSystem/products.json");
    products = JSON.parse(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al leer los productos" });
    return;
  }

  if (limit) {
    products = products.slice(0, parseInt(limit));
  }

  res.json(products);
});

app.get("/products/:pid", async (req, res) => {
  try {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
    if (!product) {
      res.status(404).json({ error: "Producto no encontrado" });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

// Puerto en el que se ejecutará el servidor
const port = 8080;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
