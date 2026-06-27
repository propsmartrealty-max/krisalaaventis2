/* 
   Krisala Aventis — Global Configuration Registry & Sovereign Tracking Pipeline
   Replace the placeholders below with your actual IDs to activate tracking instantly.
*/
const SOVEREIGN_CONFIG = {
  GTM_ID: 'GTM-XXXXXXX',          // Replace with your Google Tag Manager ID (e.g. GTM-W2KJ34M)
  GA4_ID: 'G-XXXXXXXXXX',          // Replace with your Google Analytics 4 ID (e.g. G-H2KL98P)
  FB_PIXEL_ID: 'XXXXXXXXXXXXXXX',  // Replace with your Facebook Pixel ID (e.g. 982138947293)
  CLARITY_ID: 'XXXXXXX',           // Replace with your Microsoft Clarity Project ID
  HOTJAR_ID: 'XXXXXXX',            // Replace with your Hotjar Site ID
  WHATSAPP_PHONE: '917744009295',
  OFFICIAL_EMAIL: 'propsmartrealty@gmail.com'
};

// 1. Google Tag Manager (GTM)
if (SOVEREIGN_CONFIG.GTM_ID && SOVEREIGN_CONFIG.GTM_ID !== 'GTM-XXXXXXX') {
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', SOVEREIGN_CONFIG.GTM_ID);
}

// 2. Google Analytics 4 (GA4)
if (SOVEREIGN_CONFIG.GA4_ID && SOVEREIGN_CONFIG.GA4_ID !== 'G-XXXXXXXXXX') {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + SOVEREIGN_CONFIG.GA4_ID;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', SOVEREIGN_CONFIG.GA4_ID, { 'anonymize_ip': true });
}

// 3. Facebook Pixel
if (SOVEREIGN_CONFIG.FB_PIXEL_ID && SOVEREIGN_CONFIG.FB_PIXEL_ID !== 'XXXXXXXXXXXXXXX') {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', SOVEREIGN_CONFIG.FB_PIXEL_ID);
  fbq('track', 'PageView');
}

// 4. Microsoft Clarity
if (SOVEREIGN_CONFIG.CLARITY_ID && SOVEREIGN_CONFIG.CLARITY_ID !== 'XXXXXXX') {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script", SOVEREIGN_CONFIG.CLARITY_ID);
}

// 5. Hotjar
if (SOVEREIGN_CONFIG.HOTJAR_ID && SOVEREIGN_CONFIG.HOTJAR_ID !== 'XXXXXXX') {
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:SOVEREIGN_CONFIG.HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}
