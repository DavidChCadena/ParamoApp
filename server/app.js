const express = require('express');
const app = express();
const port = 3000;
var nodemailer = require('nodemailer');
var cors = require('cors')

app.use(cors())

const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prueba.uptcdis@gmail.com',
      pass: 'Distribuidos2021.'
    }
  });

app.put('/', (req, res) => {
  var mailOptions ={
      from: 'prueba.uptcdis@gmail.com',
      to: req.body.email,
      subject: 'Cambio de estado de tu proyecto',
      text: 'Estimado ' + req.body.name + 'Su proyecto realizado por producciones páramo acaba de cambiar al estado: '
      + req.body.state + ' \r ' + ' \r ' + 'Notas: '+req.body.note
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send({message: 'Hay un error en el envio de correo' } , 400)
      console.log(error);
    } else {
      res.send({message: 'Correo enviado exitosamente' } , 200);
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
