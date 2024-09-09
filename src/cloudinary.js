import { v2 as cloudinary } from "cloudinary";
import { valor } from "./config/config.js";
cloudinary.config({
  cloud_name: valor.cloud_name,
  api_key: valor.api_key,
  api_secret: valor.api_secret,
  secure: true,
});
export const uploadImage = async (filesPhat) => {
  return await cloudinary.uploader.upload(filesPhat, {
    folder: "primerCrudImage",
  });
};
