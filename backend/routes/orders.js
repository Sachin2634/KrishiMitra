const router = require('express').Router();
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');
const oc = require('../controllers/orderController');

router.post('/', protect, authorize('consumer'), oc.placeOrder);
router.get('/', protect, authorize('consumer'), oc.listOrders);

module.exports = router;
