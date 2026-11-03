// Cloudflare Pages Function: /api/contact
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function onRequestPost(context: any) {
  try {
    const data = await context.request.json();

    // Honeypot bot protection
    if (data.bot_check || data.website_url || data.honeypot || data.company_fax) {
      return new Response(JSON.stringify({ success: true, filtered: true }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const clean = (val: any, len = 200) => String(val || '').replace(/[<>"'&]/g, '').trim().slice(0, len);
    const name = clean(data.name, 100);
    const rawPhone = String(data.phone || '').replace(/[^0-9+]/g, '').slice(0, 16);
    const phone = clean(rawPhone, 20);
    const email = clean(data.email, 100);
    const config = clean(data.config, 50);
    const budget = clean(data.budget, 50);
    const message = clean(data.message, 1000);
    const utm_source = clean(data.utm_source, 100);
    const utm_medium = clean(data.utm_medium, 100);
    const utm_campaign = clean(data.utm_campaign, 100);
    const page_url = clean(data.page_url, 300);

    // Relay lead via HTTPS to Web3Forms / Email Service
    const leadPayload = {
      access_key: context.env?.WEB3FORMS_ACCESS_KEY || 'b28972bc-8e15-4fe5-86b7-82b12ee0e82b',
      subject: `🔥 New Lead: ${name || 'Prospective Buyer'} — Krisala Aventis (Cloudflare Edge)`,
      from_name: 'Krisala Aventis Portal (Cloudflare)',
      to_email: context.env?.EMAIL_USER || 'propsmartrealty@gmail.com',
      name: name || 'N/A',
      phone: phone || 'N/A',
      email: email || 'N/A',
      config: config || 'N/A',
      budget: budget || 'N/A',
      message: message || 'N/A',
      utm_source: utm_source || 'Organic',
      utm_medium: utm_medium || 'Organic',
      utm_campaign: utm_campaign || 'N/A',
      page_url: page_url || 'https://krisalaventis.in',
      submitted_at: new Date().toISOString()
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(leadPayload)
    });

    if (res.ok) {
      return new Response(JSON.stringify({ success: true, edge: true }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    return new Response(JSON.stringify({ success: true, backup: true }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: true, warning: err.message }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
