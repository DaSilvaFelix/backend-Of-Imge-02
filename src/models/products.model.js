import mongoose from "mongoose";

const productModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productModel);
