const express = require('express');
const {getCars, getCar, createCar, updateCar, deleteCar} = require('../controllers/hospitals');
const router= express.Router();

const bookingRouter = require('./bookings');
const {protect, authorize} = require('../middleware/auth');


router.use('/:carId/bookings/',bookingRouter);
router.route('/').get(getCars).post(protect, authorize('admin'), createCar);
router.route('/:id').get(getCar).put(protect,authorize('admin'), updateCar).delete(protect, authorize('admin'), deleteCar);

module.exports = router;
