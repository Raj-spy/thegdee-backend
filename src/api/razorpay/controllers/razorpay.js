const express = require('express');
const Razorpay = require('razorpay');
const app = express();
const port = 5500;

// Razorpay credentials
const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_FmWMEGnclUdJ7',  // Replace with your Razorpay key ID
  key_secret: '3Nwsy4qiunBXmmP44Z64'  // Replace with your Razorpay key secret
});

// Middleware to parse JSON
app.use(express.json());

// POST endpoint to create Razorpay order
app.post('/create-razorpay-order', async (req, res) => {
  const { totalAmount } = req.body;  // Assuming totalAmount is sent in the request body

  try {
    const order = await razorpayInstance.orders.create({
      amount: totalAmount * 100,  // Razorpay expects amount in paise (1 INR = 100 paise)
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1  // Automatic capture
    });

    res.json({ orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
