// routes/products.js
const router = require('express').Router();
const { protect } = require('../middleware/auth');
const {authorize} = require('../middleware/roles')
const ctrl = require('../controllers/productController');

// Define route paths and methods
router.route('/')
  .get(ctrl.listProducts)
  .post(protect, authorize('farmer'), ctrl.createProduct);  // Ensure this is correctly implemented

router.route('/:id')
  .put(protect, authorize('farmer'), ctrl.updateProduct)
  .delete(protect, authorize('farmer'), ctrl.deleteProduct);

module.exports = router;