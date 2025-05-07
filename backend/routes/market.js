const router = require('express').Router();
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');
const { getRates } = require('../controllers/marketController');

router.get('/', protect, authorize('farmer'), getRates);

module.exports = router;
