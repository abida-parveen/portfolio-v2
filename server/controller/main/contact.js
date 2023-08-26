var nodemailer = require("nodemailer");

require("dotenv").config();

var transport = {
  service: "Zoho",
  host: "smtp.zoho.com", // Don’t forget to replace with the SMTP host of your provider
  port: 587, //465, //587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

exports.sendMail = (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var date = Date();
  
  const content = `Hi Abida, \n\n A message was sent from ${name} with email: ${email} at ${date} \n \n Message: ${message}`;
  
  var mail = {
    from: `"Abida" ${process.env.NODEMAILER_USER}`,
    to: "abida.parveen840@gmail.com", // Change to email address that you want to receive messages on
    subject: "From Website",
    text: content,
  };
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({
        param: "internalServerError",
        msg: "Internal Server Error, Please refresh and try again",
      });
      console.log(err)
    } else {
      res.status(200).json({
        param: "success",
        msg: "Message Sent Successfully",
      });
    }
  });
};

transporter.debug = true;
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});
