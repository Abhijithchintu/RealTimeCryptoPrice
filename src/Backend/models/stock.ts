import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export const Stock = mongoose.model('Stock', stockSchema);