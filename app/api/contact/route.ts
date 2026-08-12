import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Verify Honeypot (Security)
    if (data.contact_me) {
      return NextResponse.json({ success: true, note: 'silently dropped' }, { status: 200 });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'propsmartrealty@gmail.com',
        pass: process.env.EMAIL_PASS, // This is the Google App Password
      },
    });

    // Construct Email HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #caa350; border-bottom: 2px solid #caa350; padding-bottom: 10px;">New Krisala Aventis Lead 🏠</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-weight: bold; background: #f9f9f9;">Name</td>
            <td style="padding: 10px; border: 1px solid #eaeaea;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-weight: bold; background: #f9f9f9;">Phone</td>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-size: 16px;">
              <a href="tel:${data.phone}" style="color: #25D366; font-weight: bold;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-weight: bold; background: #f9f9f9;">Email</td>
            <td style="padding: 10px; border: 1px solid #eaeaea;">${data.email || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-weight: bold; background: #f9f9f9;">Configuration</td>
            <td style="padding: 10px; border: 1px solid #eaeaea;">${data.config || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-weight: bold; background: #f9f9f9;">Budget</td>
            <td style="padding: 10px; border: 1px solid #eaeaea;">${data.budget || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eaeaea; font-weight: bold; background: #f9f9f9;">Source</td>
            <td style="padding: 10px; border: 1px solid #eaeaea;">${data.subject || 'Website Lead'}</td>
          </tr>
        </table>

        ${data.message && data.message !== 'N/A' ? `
        <div style="margin-top: 20px; padding: 15px; background: #f1f1f1; border-left: 4px solid #caa350;">
          <strong>Message:</strong><br/>
          <p style="margin-top: 5px;">${data.message}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eaeaea; text-align: center;">
          <a href="https://wa.me/91${data.phone}?text=Hi%20${encodeURIComponent(data.name)},%20thank%20you%20for%20enquiring%20about%20Krisala%20Aventis.%20How%20can%20I%20help%20you?" style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
            💬 Open WhatsApp Chat
          </a>
        </div>
        
        <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">
          Powered by Sovereign Analytics Engine • Sent at ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Dispatch the email
    const info = await transporter.sendMail({
      from: `"Krisala Aventis Portal" <${process.env.EMAIL_USER || 'propsmartrealty@gmail.com'}>`,
      to: 'propsmartrealty@gmail.com', // Destination
      subject: `🔥 New Lead: ${data.name} — Krisala Aventis`,
      html: htmlContent,
      replyTo: data.email !== 'N/A' ? data.email : undefined,
    });

    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
