const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  owner:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:       { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  available:  { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Equipment', EquipmentSchema);
