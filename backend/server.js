require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');
const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

connectDB();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',  // Only allow your frontend
  credentials: true                 // Needed if you use cookies or auth headers
}));
app.use(express.json());

// Route handlers
app.use('/api/auth',     require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/equipment', require('./routes/equipment'));
app.use('/api/market',    require('./routes/market'));
app.use('/api/orders',    require('./routes/orders'));

// Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  const { items } = req.body;
  
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // Amount should be provided in the smallest currency unit
    },
    quantity: 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.CLIENT_ORIGIN}/success`,
      cancel_url: `${process.env.CLIENT_ORIGIN}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require('dotenv').config();
// const cors = require('cors');
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const connectDB = require('./config/db');

// // Connect to Database
// connectDB();

// // Initialize Express App
// const app = express();

// // Set up CORS for your frontend
// app.use(cors({
//   origin: 'http://localhost:5173', // Only allow your frontend
//   credentials: true                // Needed if you use cookies or auth headers
// }));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Multer configuration for handling file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads'); // Directory to store uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`); // Generate a unique filename
//   }
// });

// const upload = multer({ storage });

// // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Import routes and customize Multer middleware for necessary endpoints
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/products', require('./routes/products')); // Assume products route handles uploads
// app.use('/api/equipment', require('./routes/equipment'));
// app.use('/api/market', require('./routes/market'));
// app.use('/api/orders', require('./routes/orders'));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ message: 'Server error' });
// });

// // Set up the server port
// const PORT = process.env.PORT || 5000;

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));