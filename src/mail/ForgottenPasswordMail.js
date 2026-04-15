const sendOTP = require("../utils/sendOTP");
const path = require("path");
const ejs = require("ejs");

async function ForgottenPasswordMail(email, code, name)
{
    const templatePath = path.join(__dirname, "../views/mails/forgottenPasswordOTP.ejs");

    const htmlContent = await ejs.renderFile(templatePath, { code, name });


    const sent = await sendOTP.sendMail(
      email,
      "Password Reset OTP",
      `Your Password Reset One Time Password is: ${code}`,
      htmlContent
    );

    if(sent)
    {
        return true;
    }

    return false;
    
}

module.exports = ForgottenPasswordMail;