import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      phone,
      email,
      config,
      budget,
      message,
      utm_source,
      utm_medium,
      utm_campaign,
      page_url
    } = data;

    // Validate env variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      const missing = [];
      if (!process.env.EMAIL_USER) missing.push('EMAIL_USER');
      if (!process.env.EMAIL_PASS) missing.push('EMAIL_PASS');
      console.error("Missing environment variables:", missing.join(', '));
      return NextResponse.json({ 
        success: false, 
        error: `Server Configuration Error: Missing [${missing.join(', ')}] in Vercel Environment Variables.`,
        missing 
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER.trim(),
        pass: process.env.EMAIL_PASS.trim().replace(/\s+/g, ''),
      },
    });

    const mailOptions = {
      from: `Krisala Aventis Portal <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔥 New Lead: ${name} — Krisala Aventis`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Strategic Lead Generated</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #fff;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name || 'N/A'}</td>
            </tr>
            <tr style="background-color: #fdfdfd;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Mobile Number</td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                <a href="tel:+91${phone}" style="color: #d4af37; font-weight: bold; text-decoration: none;">+91 ${phone}</a>
              </td>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${email !== 'N/A' ? `<a href="mailto:${email}">${email}</a>` : 'N/A'}</td>
            </tr>
            <tr style="background-color: #fdfdfd;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Configuration</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${config || 'N/A'}</td>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Budget</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${budget || 'N/A'}</td>
            </tr>
            <tr style="background-color: #fdfdfd;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Custom Message</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${message || 'N/A'}</td>
            </tr>
          </table>

          <h3 style="margin-top: 30px; color: #555;">Marketing & Attribution Data</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Source URL</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${page_url || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">UTM Source</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${utm_source || 'Organic'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">UTM Medium</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${utm_medium || 'Organic'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">UTM Campaign</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${utm_campaign || 'N/A'}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            This lead was securely processed by the Krisala Aventis Sovereign Node.js Engine.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: ", info.response);

    return NextResponse.json({ success: true }, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { 
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
