const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    amount: { type: Number, required: true },
  }],
  client: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    postCode: { type: String, required: true },
  },
  total: { type: Number, required: true },
},
  { versionKey: false }
);

module.exports = mongoose.model('Order', orderSchema);