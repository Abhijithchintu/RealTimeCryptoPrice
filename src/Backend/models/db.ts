import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/stockdb';

mongoose.connect(uri, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;