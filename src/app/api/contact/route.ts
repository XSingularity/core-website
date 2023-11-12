import e from 'express';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { useState } from 'react';

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

    let emailError = 1;
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err);
            emailError = 1;
        }
        else{
            console.log(info);
            emailError = 0;
        }
    });

    if (emailError === 0) {
        return NextResponse.json({ message: "error", status: 500});
    } else {
        return NextResponse.json({ message: "success", status: 200});
    }
}
