/* 
   Krisala Aventis — Global Configuration Registry
   Replace the placeholders below with your actual IDs.
*/
const SOVEREIGN_CONFIG = {
  GTM_ID: 'GTM-XXXXXXX',          // Replace with your Google Tag Manager ID
  GA4_ID: 'G-XXXXXXXXXX',          // Replace with your Google Analytics 4 ID
  FB_PIXEL_ID: 'XXXXXXXXXXXXXXX',  // Replace with your Facebook Pixel ID
  WHATSAPP_PHONE: '917744009295',
  OFFICIAL_EMAIL: 'propsmartrealty@gmail.com'
};

// Auto-Update GTM if ID is provided
if (SOVEREIGN_CONFIG.GTM_ID !== 'GTM-XXXXXXX') {
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', SOVEREIGN_CONFIG.GTM_ID);
}
