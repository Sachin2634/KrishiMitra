const Equipment = require('../models/Equipment');

exports.createEq = async (req, res) => {
  const eq = await Equipment.create({ ...req.body, owner: req.user._id });
  res.status(201).json(eq);
};

exports.updateEq = async (req, res) => {
  const eq = await Equipment.findOneAndUpdate(
    { _id: req.params.id, owner: req.user._id },
    req.body,
    { new: true }
  );
  res.json(eq || { message: 'Not found/unauthorized' });
};

exports.deleteEq = async (req, res) => {
  await Equipment.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
  res.json({ message: 'Deleted' });
};

exports.listEq = (req, res) => Equipment.find().then(list => res.json(list));

// Simple “rent” toggler:
exports.rentEq = async (req, res) => {
  const eq = await Equipment.findById(req.params.id);
  if (!eq || !eq.available) return res.status(400).json({ message: 'Unavailable' });
  eq.available = false;
  await eq.save();
  res.json({ message: 'Rented', eq });
};
