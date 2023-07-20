const express = require('express');
const cors = require('cors')
const { sendMail, transporter } = require('./mail.js');
require('dotenv').config();


const app = express();
const port = 5050;

app.use(express.json());
app.use(cors())

app.post('/send-email', async (req, res) => {
  const mailOptions = {
    ...req.body,
    from: {
      name: "Ero Test",
      address: process.env.USER
    },
  }
  

  await sendMail(transporter, mailOptions);
  res.send('Email sent');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});