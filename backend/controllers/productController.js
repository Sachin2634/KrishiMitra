const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const product = await Product.create({ ...req.body, farmer: req.user._id });
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const prod = await Product.findOneAndUpdate(
    { _id: req.params.id, farmer: req.user._id },
    req.body,
    { new: true }
  );
  res.json(prod || { message: 'Not found or unauthorized' });
};

exports.deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id, farmer: req.user._id });
  res.json({ message: 'Deleted' });
};

exports.listProducts = (req, res) =>
  Product.find().then(products => res.json(products));
