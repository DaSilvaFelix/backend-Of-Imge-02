import express from "express";
import cors from "cors";
import morgan from "morgan";
import conexion from "./db/database.js";
import index_ruta from "./routers/index.router.js";
import ruta_product from "./routers/products.router.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
conexion();
app.use(express.json());
app.use(index_ruta);
app.use(ruta_product);
app.listen(4000, () => {
  console.log("server running in http://localhost:4000/");
});
