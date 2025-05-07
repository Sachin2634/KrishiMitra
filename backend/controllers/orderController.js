const Order = require('../models/Order');
const Product = require('../models/Product');

exports.placeOrder = async (req, res) => {
  const { items } = req.body; // [{ product: id, qty }]
  let total = 0;

  for (let { product: pid, qty } of items) {
    const p = await Product.findById(pid);
    if (!p || p.quantity < qty) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }
    p.quantity -= qty;
    await p.save();
    total += p.price * qty;
  }

  const order = await Order.create({
    consumer: req.user._id,
    products: items,
    total,
  });

  res.status(201).json(order);
};

exports.listOrders = (req, res) =>
  Order.find({ consumer: req.user._id }).populate('products.product')
    .then(orders => res.json(orders));
