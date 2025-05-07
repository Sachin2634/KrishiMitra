const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  consumer:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty:      { type: Number, default: 1 }
  }],
  total:      { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
