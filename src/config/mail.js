const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const mailTransporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
});

mailTransporter.verify((error, success) => {
    if (error) {
      console.error("Email configuration error:", error);
    } else {
      console.log("Email configuration successful!");
    }
});

const testEmail = async () => {
    await mailTransporter.verify();
    console.log("Email configuration is valid!");

    const info = await mailTransporter.sendMail({
    from: "no-reply@example.com",
    to: "niel2264@gmail.com",
    subject: "Test Email",
    text: "Hello, this is a test email to verify your email configuration.",
    });

    console.log("Test email sent successfully:", info.messageId);
};

module.exports = mailTransporter;