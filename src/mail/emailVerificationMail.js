const sendOTP = require("../utils/sendOTP");

async function EmailVerificationMail(email, code)
{
    const htmlContent = `
      <h3>Hello,</h3>
      <p>Use the following code to verify your email address:</p>
      <h3>${code}</h3>
      <p>This code will expire in 10 minutes.</p>
    `;

    const sent = await sendOTP.sendMail(
      email,
      "Email Verification",
      `Your verification code is: ${code}`,
      htmlContent
    );

    if(sent)
    {
        return true;
    }

    return false;
}

module.exports = EmailVerificationMail;