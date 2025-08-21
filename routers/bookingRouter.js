const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.renderBookingForm);

router.post('/', bookingController.createBooking);

module.exports = router;
