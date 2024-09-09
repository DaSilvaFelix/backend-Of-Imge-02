import { Router } from "express";
import {
  createProduct,
  deletProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/controller.js";
import fileUpload from "express-fileupload";
const ruta_product = Router();
ruta_product.get("/products", getProduct);
ruta_product.post("/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }), createProduct);
ruta_product.put("/products/:id", updateProduct);
ruta_product.get("/products/:id", getProductById);
ruta_product.delete("/products/:id", deletProduct);

export default ruta_product;
