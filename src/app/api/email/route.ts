import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
 
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);
// /pages/api/postData.js

export async function POST(req: NextApiRequest,res: NextApiResponse){
console.log('hiihih')
    console.log(req.body);
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "paulmichaelhardman@gmail.com", // Your email where you'll receive emails
      from: "manuarorawork@gmail.com", // your website email address here
      subject: `balls`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {

    return res.status(500).json({ error: 'Somthing went wrong' });
  }


  // return NextResponse.json(req.body)
}