const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['accepted', 'rejected', 'pending','cancelled','completed'],
    default: 'pending'
  }
});

const BookingModel = mongoose.model('booking', bookingSchema);

module.exports = {
  BookingModel
}