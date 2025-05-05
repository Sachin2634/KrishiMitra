const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  weight: String,
  price: Number,
  seller: String,
  rating: Number,
  description: String,
  storage: String,
  nutrition: [String]
});

module.exports = mongoose.model("Product", ProductSchema);