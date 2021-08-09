

const nodemailer = require("nodemailer");

const testAccount = {
  user: "infofjsolution@gmail.com",
  pass:"hjtqwgajsyohnkoj"
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
});

module.exports = transporter