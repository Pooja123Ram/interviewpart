import express from 'express';
const app = express();
import { sendVerificationEmail } from './email.service';

app.get('/verify/:verificationToken', (req, res) => {
  const verificationToken = req.params.verificationToken;

  // Check if verificationToken is valid
  // Mark the user's email as verified in the database

  res.send('Email verified successfully.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
