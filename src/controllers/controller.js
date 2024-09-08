import product from "../models/products.model.js";

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
  const { name, description, price } = req.body;
  try {
    const newProduct = await new product({
      name,
      description,
      price,
    });
    await newProduct.save();
    res.status(200).json({
      messaje: "poducto creado con exito",
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
  const { id } = req.params;
  const updatedProducts = product.findByIdAndUpdate(id, req.body);
  res.json(updatedProducts);
};
