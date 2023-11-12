import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export async function POST(request: Request, response: Response): Promise<void> {
    const { name, email, message }: Partial<Contact> = await request.body;
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
    console.log(process.env.password);

    const mailData = {
        from: 'xsingularity.corp@gmail.com',
        to: 'omarcorporated@gmail.com',
        subject: `Message From ${request.body.name}`,
        text: request.body.message + " | Sent from: " + request.body.email,
        html: `<div>${request.body.message}</div><p>Sent from:
      ${request.body.email}</p>`
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });

    // response.send({ message: "success" });
}


// export default async function POST(request: Request) {
//     const { name, email, message }: Partial<Contact> = await request.json()

//     if (!userId || !title) return NextResponse.json({ "message": "Missing required data" })

//     const res = await fetch(DATA_SOURCE_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'API-Key': API_KEY
//         },
//         body: JSON.stringify({
//             userId, title, completed: false
//         })
//     })

//     const newTodo: Todo = await res.json()

//     return NextResponse.json(newTodo)
// }