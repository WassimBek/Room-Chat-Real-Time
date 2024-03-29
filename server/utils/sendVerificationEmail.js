const nodemailer = require('nodemailer');
const otpGenerator = require("./generateOtp")
module.exports = async(email , user_id , prisma) => {
    const otp =await otpGenerator(user_id , prisma) ;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'verification code',
        text: `Hello Sir : u need to verificate your account to start using web site` ,
        html : `<p>here is your code :${otp} </p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent:'+ info.response);
        }
    });
}