const mailTransporter = require('../config/mail');

class SendOTP {
  
    async sendMail(to, subject, text, html = null){
        const mailOptions = {
          from: `"Point Of Sale" <${process.env.MAIL_USER}>`,
          to,
          subject,
          text,
          html: html || undefined,
        };
  
        await mailTransporter.sendMail(mailOptions);
        return true;
    }
}
  

module.exports = new SendOTP();