import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

export const conexion = async () => {
  try {
    await mongoose.connect(DB_URL,)
    console.log('dataBase coneccting');
    
  } catch (error) {
    console.log(error);
    
  }
};
export default conexion