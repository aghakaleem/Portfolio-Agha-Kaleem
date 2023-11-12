const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

// server used to send emails
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(bodyParser.json());
app.get ("/contact", (req, res) => {
    res.json({message: "Hello from server!"});

});

const contactEmail = nodemailer.createTransport( {
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});



app.listen(5000, () => console.log("Server Running"));



app.post("/contact", bodyParser.urlencoded({extended:false}), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
