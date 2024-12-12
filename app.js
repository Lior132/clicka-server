const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose')
// const cookieParser = require('cookie-parser');
const app = express();

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));


app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173' // עדכן לפי הצורך
}));

app.use(express.json());
console.log("asdasd");

// רוטים
app.use('/', require('./routes/authRouters'));

app.get('/', (req, res) => {
  res.send('Server is working 24/7 on Render!');
});

// הפעלת השרת
const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port yes ${PORT}`);
// });
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
