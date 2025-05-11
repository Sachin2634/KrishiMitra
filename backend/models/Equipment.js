const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  weeklyRate: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  image: { // Image URL or identifier
    type: String // You might store image URL or path here
  },
  ageOfProduct: { // Age of the product
    type: Number, // Represents product age in days, months, or years, depending on use case
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Equipment', EquipmentSchema);