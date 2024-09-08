import { Router } from "express";
import { saludo } from "../controllers/controller.js";
const index_ruta = Router();

index_ruta.get('/',saludo)
export default index_ruta