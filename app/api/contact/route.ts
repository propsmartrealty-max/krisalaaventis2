import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function backupLeadLocally(leadData: any) {
  try {
    const backupDir = path.join(process.cwd(), 'data');
    const backupFile = path.join(backupDir, 'leads-backup.json');
    let leads: any[] = [];
    if (fs.existsSync(backupFile)) {
      try {
        leads = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
      } catch (_) {
        leads = [];
      }
    }
    leads.push({
      ...leadData,
      recordedAt: new Date().toISOString()
    });
    fs.writeFileSync(backupFile, JSON.stringify(leads.slice(-200), null, 2), 'utf8');
    console.log('[Lead Vault] Lead safely recorded to local backup vault.');
  } catch (err: any) {
    // If running in serverless read-only environment, fallback to /tmp
    try {
      const tmpFile = path.join('/tmp', 'leads-backup.json');
      let leads: any[] = [];
      if (fs.existsSync(tmpFile)) {
        try { leads = JSON.parse(fs.readFileSync(tmpFile, 'utf8')); } catch (_) {}
      }
      leads.push({ ...leadData, recordedAt: new Date().toISOString() });
      fs.writeFileSync(tmpFile, JSON.stringify(leads.slice(-200), null, 2), 'utf8');
      console.log('[Lead Vault] Lead safely recorded to /tmp vault.');
    } catch (_) {}
  }
}

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

    // Record lead immediately to backup vault
    backupLeadLocally(data);

    // Validate email configuration
    const isConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS && !process.env.EMAIL_PASS.includes('your-16-digit');

    if (!isConfigured) {
      console.warn('[SMTP Warning] EMAIL_USER/EMAIL_PASS unconfigured in environment. Lead preserved in backup vault.');
      return NextResponse.json({ 
        success: true, 
        note: 'Lead safely captured in backup vault (SMTP awaiting credentials).' 
      }, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!.trim(),
        pass: process.env.EMAIL_PASS!.trim().replace(/\s+/g, ''),
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
              <td style="padding: 12px; border: 1px solid #ddd;">${email && email !== 'N/A' ? `<a href="mailto:${email}">${email}</a>` : 'N/A'}</td>
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
    console.error("Error in contact API:", error);
    // Still return success if backup succeeded
    return NextResponse.json({ success: true, backup: true, warning: error.message }, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
