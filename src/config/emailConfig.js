require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '34275436f45b19',
      pass: '669daba951b4bd',
    },
  });

  module.exports = transporter;