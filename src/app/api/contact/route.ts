import e from 'express';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, message }: Partial<Contact> = await request.json()
    require('dotenv').config();

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'xsingularity.corp@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: 'xsingularity.corp@gmail.com',
        to: email,
        subject: `Message From ${name}`,
        text: message + " | Sent from: " + email,
        html: `<div>${message}</div><p>Sent from:
      ${email}</p>`
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
    return NextResponse.json({ message: "success", status: 200});
}
