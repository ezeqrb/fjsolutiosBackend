const express = require('express')
const app = express()
const port = 3000
const nodemailer = require("nodemailer");
import transporter from './transporter'

app.use(express.json())
app.use(corse())
app.use(express.urlencoded({ extended: false }))
app.post('/contact-form', (req, res) => {
  
  async function main() {

    let data = req.body
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
  
    // create reusable transporter object using the default SMTP transport
    
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${data.email.map((a)=>a)}`, // sender address
      to: "infofjsolution@gmail.com", // list of receivers
      subject: "Hello ✔ Nueva Consulta por Formulario", // Subject line
      text: `Hello FJ Solutions : ${data.firstName} ${data.lastName}, ${data.message}`, // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  
  
  res.send('nice')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})