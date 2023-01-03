const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1- create a transporter
  // not a good idea to use gmail in production (flaged as spammer , not really secure)
  // use sendgrid or mailgun
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2- Define the email options
  const mailOptions = {
    from: 'CryptoTech Team <Cryptotech@epitech.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  // 3- Actually send the email
  // transporter.sendMail return a promise
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
