const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  value: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true,
    enum: ['In Stock', 'Low Stock', 'Out of Stock', 'Pending', 'Overdue']
  }
}, {
  timestamps: true
});

supplySchema.pre('save', function(next) {
  if (this.quantity === 0) {
    this.status = 'Out of Stock';
  } else if (this.quantity <= 10) {
    this.status = 'Low Stock';
  } else {
    this.status = 'In Stock';
  }
  next();
});

const Supply = mongoose.model('Supply', supplySchema);
module.exports = Supply;