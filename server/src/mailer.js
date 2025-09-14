import nodemailer from 'nodemailer'

import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

async function sendMail(to, subject, text) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    }
    return await transporter.sendMail(mailOptions)
}

export default sendMail