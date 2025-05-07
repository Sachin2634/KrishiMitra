const router = require('express').Router();
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');
const c = require('../controllers/equipmentController');

router
  .route('/')
  .get(c.listEq)
  .post(protect, authorize('farmer'), c.createEq);

router
  .route('/:id')
  .put(protect, authorize('farmer'), c.updateEq)
  .delete(protect, authorize('farmer'), c.deleteEq);

router.post('/:id/rent', protect, authorize('farmer'), c.rentEq);

module.exports = router;
