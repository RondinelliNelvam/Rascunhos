"use strict";
const nodemailer = require("nodemailer");

const emailConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "elinor.glover22@ethereal.email",
    pass: "xPFHRNuaH2buPkQBS4",
  },
};

async function sendEmail(mensagem, emails) {
  let transporter = nodemailer.createTransport(emailConfig);
  await transporter.sendMail({
    from: 'Fred Foo 👻" <foo@example.com>',
    to: `${emails}`,
    subject: "Aniversário",
    text: mensagem,
  });
}

// async function searchEmails(refreshToken, authorizedPersonId) {
//   const id = await verifyRefreshToken(refreshToken)
//   const emailUser = await userLoginService.findOneRegistry(id)
//   const authPerson = await authorizedPersonsService.findOneRegistry(
//     authorizedPersonId
//   )
//   return [emailUser.email, authPerson.email]
// }

module.exports = { sendEmail };
