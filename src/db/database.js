import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

export const conexion = async () => {
  try {
    await mongoose.connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('dataBase coneccting');
    
  } catch (error) {
    console.log(error);
    
  }
};
