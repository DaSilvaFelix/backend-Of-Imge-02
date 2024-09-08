import { Router } from "express";
import {
  createProduct,
  deletProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/controller.js";
const ruta_product = Router();
ruta_product.get("/products", getProduct);
ruta_product.post("/products", createProduct);
ruta_product.put("/products/:id", updateProduct);
ruta_product.get("/products/:id", getProductById);
ruta_product.delete("/products/:id", deletProduct);

export default ruta_product;
