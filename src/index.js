import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routers/router.js";
import { conexion } from "./db/database.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
conexion()

app.use(router);
app.listen(4000, () => {
  console.log("server running in http://localhost:4000/");
});
