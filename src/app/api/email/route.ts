import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
 
// To handle a POST request to /api
export async function POST(request: any) {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const requestBody = await request.json();
  const {businessName, emailAddress, industry, message, name, product} = requestBody
  
  try {
    const options = {
      from: "enquiries@rootedessenceco.com",
      to: ["info@rootedessenceco.com", emailAddress],
      subject: `Rooted Essence Co new enquiry: ${requestBody.name} from ${requestBody.businessName}`,
      html: `<html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .section {
            margin-bottom: 16px;
          }
          .label {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 8px;
            display: block;
          }
          .value {
            font-size: 14px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="section">
            <span class="label">Product</span>
            <div class="value">${product}</div>
          </div>
          <div class="section">
            <span class="label">Name</span>
            <div class="value">${name}</div>
          </div>
          <div class="section">
          <span class="label">Message</span>
          <div class="value">${message}</div>
        </div>
          <div class="section">
            <span class="label">Business name</span>
            <div class="value">${businessName}</div>
          </div>
          <div class="section">
            <span class="label">Industry</span>
            <div class="value">${industry}}</div>
          </div>
          <div class="section">
            <span class="label">Email address</span>
            <div class="value">${emailAddress}</div>
          </div>
        </div>
      </body>
      </html>`,
    };

    await transporter.sendMail(options);
    return NextResponse.json({ message: "successful form submission" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something wrong" }, { status: 500 });
  }
}
