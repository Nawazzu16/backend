const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tajmahaljourneys1@gmail.com', // Replace with your email
    pass: 'nyzl cwjc ogzz veph'  // Replace with your app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, country, contact, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'tajmahaljourneys1@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nContact: ${contact}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    } else {
      res.status(200).json({ message: 'Contact form submitted successfully!' });
    }
  });
});

// Booking Form Endpoint
// Booking Form Endpoint
app.post('/api/booking', (req, res) => {
  const { name, email, package, message, contactNumber, country } = req.body;

  // Map the short package name to the full name
  const packageNames = {
    sunrise: "Taj Mahal Sunrise Tour",
    car: "Taj Mahal Tour by Car",
    train: "Taj Mahal Tour by Train",
    overnight: "Taj Mahal Overnight Tour",
    luxury: "Taj Mahal Luxury Tour"
  };

  const fullPackageName = packageNames[package] || package;

  // Create the email body with better formatting
  const emailBody = `
    <h2>New Booking Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td><strong>Name:</strong></td>
        <td>${name}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td><strong>Contact Number:</strong></td>
        <td>${contactNumber}</td>
      </tr>
      <tr>
        <td><strong>Country:</strong></td>
        <td>${country}</td>
      </tr>
      <tr>
        <td><strong>Message:</strong></td>
        <td>${message}</td>
      </tr>
      <tr>
        <td><strong>Package:</strong></td>
        <td>${fullPackageName}</td>
      </tr>
    </table>
  `;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'tajmahaljourneys1@gmail.com',
    subject: 'New Booking Form Submission',
    html: emailBody // Use HTML formatted email body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    } else {
      res.status(200).json({ message: 'Booking form submitted successfully!' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
