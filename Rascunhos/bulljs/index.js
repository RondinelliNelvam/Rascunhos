const Queue = require("bull");
const nodemailer = require("nodemailer");
// 1. Iniciando a "queue"
const sendMailQueue = new Queue("sendMail", {
  redis: {
    host: "127.0.0.1",
    port: 6379,
  },
});

// const data = {
//   email: "userid@domain.com",
// };

// const options = {
//   cron: "*/5 * * * *", // informar a string do cron
// };
// // 2. adicionando uma Job na queue
// sendMailQueue.add(data, { repeat: options });

// 3. Consumidor
sendMailQueue.process("*", async (job) => {
  console.log("oi");
  return await sendMail(job.data.email);
});

function sendMail(email) {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: "fromuser@domain.com",
      to: email,
      subject: "Bull - npm",
      text: "This email is from bull job scheduler tutorial.",
    };
    let mailConfig = {
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "43fb9d5e0fd795",
        pass: "9bd09b2115d217",
      },
    };
    nodemailer
      .createTransport(mailConfig)
      .sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
  });
}
