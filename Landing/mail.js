const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  }
});


  const mailOptions = {
    from: {
        name:"Ero",
        address:process.env.USER
    },
    to: "edmovsesyan1@gmail.com", // list of receivers
    subject: "Hello ✔ test", // Subject line
    text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>", // html body
  };


  const sendMail = async (transporter, mailOptions) =>{
    try{
        await transporter.sendMail(mailOptions);
        console.log('all okay');
    }catch(error){
        console.log(error);
    }
  }

  module.exports = {
    transporter,
    sendMail,
  };

  // sendMail(transporter, mailOptions)