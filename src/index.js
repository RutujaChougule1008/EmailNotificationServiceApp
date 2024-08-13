const sendEmail = require('./services/emailService');

async function main() {
  const to = 'rutujachougule1137@gmail.com';
  const subject = 'Test Email';
  const text = 'This is a test email using Mailtrap.';

  const success = await sendEmail(to, subject, text);
  if (success) {
    console.log('Email was sent successfully.');
  } else {
    console.log('Failed to send email.');
  }
}

main();
