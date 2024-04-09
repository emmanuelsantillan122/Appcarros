const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price_per_day: Number,
  isRented: { type: Boolean, default: false },
 
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
