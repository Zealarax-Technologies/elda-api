const sendOTP = require("../utils/sendOTP");
const models = require('../models');

async function EmployeeDetailsMail(data) {
  const { name, email, password, business_id, role_id } = data;
  const business = await models.Business.findByPk(business_id);
  const businessName = business.name;
  const role = role_id === 3 ? 'Manager' : 'Cashier';

  const htmlContent = `
    <h3>Hello ${name},</h3>
    <p>You have been added to <strong>${businessName}</strong> as a <strong>${role}</strong>.</p>
    <p>Here are your login details:</p>
    <ul>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Password:</strong> ${password}</li>
    </ul>
    <p>Please log in and change your password immediately for security reasons.</p>
  `;

  const sent = await sendOTP.sendMail(
    email,
    `Welcome to ${businessName}`,
    `You have been added to ${businessName} as a ${role}.\nEmail: ${email}\nPassword: ${password}`,
    htmlContent
  );

  return !!sent;
}

module.exports = EmployeeDetailsMail;
