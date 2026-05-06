import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html') and f != 'index.html']

wa_pretext_contact = "Hi%2C%20I%20am%20interested%20in%20Krisala%20Aventis%20Tathawade.%20Please%20share%20the%20latest%20price%20list%2C%20floor%20plans%2C%20and%20available%20site%20visit%20slots.%20Thank%20you."
wa_pretext_footer = "Hi%2C%20I%20visited%20krisalaventis.in%20and%20would%20like%20to%20know%20more%20about%20Krisala%20Aventis%20Tathawade%20%E2%80%94%20pricing%2C%20availability%2C%20and%20site%20visit%20schedule.%20Please%20connect."

for filename in html_files:
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace tel: links with WhatsApp (visible UI only, not schema)
    # Pattern: <a href="tel:7744009295"...>📞 +91 7744009295</a>
    content = re.sub(
        r'<a\s+href="tel:7744009295"[^>]*>\s*📞\s*\+91\s*7744009295\s*</a>',
        f'<a href="https://api.whatsapp.com/send?phone=917744009295&text={wa_pretext_contact}" target="_blank" rel="noopener noreferrer" class="wa-enquiry-btn">💬 Chat on WhatsApp for Instant Details</a>',
        content
    )
    
    # Also catch footer style variants
    content = re.sub(
        r'<a\s+href="tel:7744009295"\s+style="[^"]*">\s*\+91\s*7744009295\s*</a>',
        f'<a href="https://api.whatsapp.com/send?phone=917744009295&text={wa_pretext_footer}" target="_blank" rel="noopener noreferrer" class="wa-enquiry-btn" style="font-size: 1rem; font-weight: 600;">💬 WhatsApp Enquiry</a>',
        content
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Phone sanitized: {filename}")

print("Global Phone Number Sanitization Complete.")
