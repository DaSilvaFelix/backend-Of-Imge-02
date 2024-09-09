import product from "../models/products.model.js";
import { uploadImage } from "../cloudinary.js";
import fs from "fs-extra";

export const saludo = (req, res) => res.status(200).send("<h1>Hola Mundo</h1>");

export const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await new product({
      name,
      description,
      price,
    });
    if (req.files?.Image) {
      const result = await uploadImage(req.files.Image.tempFilePath);
      newProduct.Image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.Image.tempFilePath);
    }
    await newProduct.save();
    res.status(200).json({
      messaje: "poducto creado con exito",
      newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findById(id);
    !products && res.status(404).json({ messaje: "producto no encontrado" });
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const deletProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findByIdAndDelete(id);
    !products &&
      res
        .status(404)
        .json({ massaje: "no se encontro el producto a eliminar " });
    res.json({ messaje: "producto eliminado " });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const searchProduct = await product.findById(id);
    if (!searchProduct) {
      return res
        .status(404)
        .json({ messaje: "no hay producto para actualizar" });
    } else {
      const updateproducts = await product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json({ messaje: "producto actualizado con exito", updateproducts });
    }
  } catch (error) {
    console.log(error);
  }
};
