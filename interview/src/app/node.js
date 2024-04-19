const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 4004;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Multer configuration for file uploads
const upload = multer();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'krajeswary92@gmail.com',
    pass: 'zqnj hthe xlkg tnbv',
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Routes
app.post('/send-mail', async (req, res) => {
  const { to, from, subject, body } = req.body;

  try {
    await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: body,
    //   html: <b>${body}</b>
    });

    console.log('Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.post('/send-email-with-attachment', upload.single('attachment'), (req, res) => {
  const { to, from, subject, body } = req.body;
  const attachment = req.file;

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: body,
    attachments: [
      {
        filename: attachment.originalname,
        content: attachment.buffer
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email with attachment:', error);
      res.status(500).json({ success: false, message: 'Error sending email with attachment' });
    } else {
      console.log('Email with attachment sent:', info.response);
      res.status(200).json({ success: true, message: 'Email with attachment sent successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});