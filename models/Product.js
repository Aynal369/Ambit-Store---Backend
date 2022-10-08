const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnailURL: {
      type: String,
      required: true,
    },
    productImageURL: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
