require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');


connectDB();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',  // Only allow your frontend
  credentials: true                 // Needed if you use cookies or auth headers
}));
app.use(express.json());

app.use('/api/auth',     require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/equipment', require('./routes/equipment'));
app.use('/api/market',    require('./routes/market'));
app.use('/api/orders',    require('./routes/orders'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
