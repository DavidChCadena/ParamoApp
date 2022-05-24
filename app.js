const express = require('express');
const app = express();
const port = 3000;
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prueba.uptcdis@gmail.com',
      pass: 'Distribuidos2021.'
    }
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
  var mailOptions ={
      from: 'prueba.uptcdis@gmail.com',
      to: 'jose.chaves@uptc.edu.co',
      subject: 'Prueba - Envío correo',
      text: 'Texto correo de prueba'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
