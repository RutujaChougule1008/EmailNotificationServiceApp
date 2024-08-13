const transporter = require('../config/emailConfig');
const logger = require('../utils/logger');

async function sendEmail(to, subject, text) {
  try {
    const info = await transporter.sendMail({
      from: '"Test Sender" <chougulerutuja1370@gmail.com>',
      to,
      subject,
      text,
    });
    logger.info('Email sent:', { response: info.response });
    return true;
  } catch (error) {
    logger.error('Error sending email:', { error });
    return false;
  }
}

module.exports = sendEmail;
