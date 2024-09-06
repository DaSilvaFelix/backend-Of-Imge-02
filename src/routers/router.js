import { Router } from "express";
import { saludo } from "../controllers/controller.js";
const router = Router();

router.get('/',saludo)
export default router