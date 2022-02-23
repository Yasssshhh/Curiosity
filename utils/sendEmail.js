require("dotenv").config();

const nodemailer = require("nodemailer");
const log = console.log;

module.exports = (email, text) => {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: "curiositymait@hotmail.com",
    to: email,
    subject: "Email-verification",

    html: text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log("Error", err);
    }
    return log("Email sent Successfully");
  });
};
