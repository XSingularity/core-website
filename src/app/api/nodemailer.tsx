import { NextApiResponse, NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

type Fields = {
  name: string;
  message: string;
  email: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xsingularity.corp@gmail.com',
    // process.env.NEXT_PUBLIC_EMAIL_ADDRESS
    pass: 's1ngul4rit1!',
    // process.env.NEXT_PUBLIC_PASSWORD
  },
});

//export const config = {
//  api: {
//    bodyParser: false,
//  },
//};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { name, email, message } = req.body as Fields;

  if (req.method !== 'POST') {
    return res.status(404).send({ status: 'fail', error: 'Begone.' });
  }

  try {
    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.');
    }

    if (!email || !email.trim()) {
      throw new Error('Please provide a valid email address.');
    }

    if (!message || !message.trim()) {
      throw new Error('Please provide a valid email message.');
    }

    await transporter.sendMail({
      to: 'douglas09marquez@gmail.com',
      from: 'xsingularity.corp@gmail.com',
      replyTo: email,
      subject: `Hello from ${name}`,
      text: message,
      html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`,
    });

    res.status(200).send({ status: 'done', message: 'message has been sent' });
  } catch (error) {
    res.status(500).send({ status: 'fail', error: `${error}` });
  }
};

export default handler;