// controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const prod = await Product.findOneAndUpdate(
      { _id: req.params.id, farmer: req.user._id },
      req.body,
      { new: true }
    );
    res.json(prod || { message: 'Not found or unauthorized' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id, farmer: req.user._id });
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();  // This should return an array
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const multer = require('multer');
// const Product = require('../models/Product');

// // Multer configuration for handling image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads'); // Directory where images will be stored
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
//   }
// });

// // Multer middleware to handle single image file named 'image'
// const upload = multer({ storage });

// // Function to create a new product with possible image
// exports.createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category } = req.body;

//     // Handle image upload
//     let imagePath = '';
//     if (req.file) {
//       imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//     }

//     const product = await Product.create({
//       name,
//       description,
//       price,
//       category,
//       image: imagePath, // Set the image path
//     });

//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Function to update an existing product with a new image
// exports.updateProduct = async (req, res) => {
//   try {
//     const updateData = { ...req.body };

//     if (req.file) {
//       updateData.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//     }

//     const prod = await Product.findOneAndUpdate(
//       { _id: req.params.id, farmer: req.user._id },
//       updateData,
//       { new: true }
//     );

//     res.json(prod || { message: 'Not found or unauthorized' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Function to delete a product
// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findOneAndDelete({ _id: req.params.id, farmer: req.user._id });
//     res.json({ message: 'Deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Function to list all products
// exports.listProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Export multer upload middleware
// exports.upload = upload.single('image');