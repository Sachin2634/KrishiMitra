const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  category: { type: String, required: true },
  dateOfHarvest: { type: Date },
  dateOfExpiry: { type: Date },
  deliveryMode: { type: String },
  images: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);