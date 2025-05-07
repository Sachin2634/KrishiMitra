const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  farmer:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:       { type: String, required: true },
  description:{ type: String },
  price:      { type: Number, required: true },
  quantity:   { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
