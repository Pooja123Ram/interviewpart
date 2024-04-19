const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'umadevisanthosh001@gmail.com',
    pass: 'asbs xdte xcpl xrxz',
  },
});

app.post('/verifyEmail', (req, res) => {
  // Implement email verification logic here, for example using an external API
  // Dummy response for demonstration purposes
  const { email } = req.body;
  const valid = email && email.includes('@example.com'); // Replace with your actual validation logic
  res.json({ valid });
});

app.post('/sendLeaveApplication', (req, res) => {
  const { employeeEmail, leaveType, leaveReason } = req.body;

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <umadevisanthosh001@gmail.com>', // sender address
    to: employeeEmail, // recipient's email address
    subject: 'Leave Application', // Subject line
    text: `Dear Employee,\n\nYour leave application for ${leaveType} has been received. Reason: ${leaveReason}\n\nThank you.`, // plain text body
    html: `<p>Dear Employee,</p><p>Your leave application for <strong>${leaveType}</strong> has been received.</p><p>Reason: ${leaveReason}</p><p>Thank you.</p>`, // html body
  }, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Leave application email sent to:', employeeEmail);
      console.log('Message sent: %s', info.messageId);
      res.json({ message: 'Leave application email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


