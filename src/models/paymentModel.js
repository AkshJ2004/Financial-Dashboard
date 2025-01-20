const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    status: { 
        type: String,
        enum: ['pending', 'overdue'],
        default: function() {
            return this.dueDate > new Date() ? 'pending' : 'overdue';
        }
    }
});

paymentSchema.methods.updateStatus = function() {
    this.status = this.dueDate > new Date() ? 'pending' : 'overdue';
};

paymentSchema.pre('save', function(next) {
    this.updateStatus();
    next();
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;