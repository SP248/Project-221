const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer');

const transported = nodemailer.createTransport({
    port: 465,
    host: "smpt.gmail.com",
    auth: {
        user:'',
        pass: '',
    },
    secure: true,
});