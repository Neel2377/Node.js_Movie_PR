const mongoose = require('mongoose');

const PER_SEAT_PRICE = 250; 

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  theater: { type: String, required: true },
  city: { type: String, required: true },
  showtime: { type: Date, required: true },
  seats: { type: Number, required: true },
  price: { type: Number }, 
  createdAt: { type: Date, default: Date.now }
});

bookingSchema.pre('save', function(next) {
  this.price = this.seats * PER_SEAT_PRICE;
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
