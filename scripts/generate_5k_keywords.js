const fs = require("fs");

const rootKeywords = [
  "Krisala Aventis",
  "Krisala Aventis Tathawade",
  "Krisala Developers",
  "Krisala Projects in Pune",
  "New Projects in Tathawade",
  "Flats in Tathawade",
  "2 BHK in Tathawade",
  "3 BHK in Tathawade",
  "Pune Real Estate Market",
  "Buy Flat in Pune",
  "Luxury Apartments Tathawade",
  "Pre Launch Projects Tathawade",
  "Under Construction Flats Tathawade",
  "Real Estate Investment Pune",
  "Best Builders in Pune",
  "Top Real Estate Projects Pune",
  "Krisala Aventis Pune",
  "Krisala Developers Reviews"
];

const modifiers = [
  "Price",
  "Reviews",
  "Floor Plan",
  "Brochure",
  "Construction Update",
  "Location",
  "Possession Date",
  "For NRI",
  "Investment",
  "Vs Competitors",
  "Amenities",
  "Master Plan",
  "RERA",
  "Contact Number",
  "Sample Flat"
];

const geographies = [
  "Near Hinjewadi",
  "Near Wakad",
  "Near Punawale",
  "Near PCMC",
  "Near Baner",
  "Near Balewadi",
  "Near Mumbai Pune Expressway",
  "For IT Professionals",
  "Best ROI",
  "Top Builders",
  "Premium Lifestyle",
  "Near IT Park",
  "Near Phoenix Mall",
  "Near Bhumkar Chowk",
  "Near Dange Chowk",
  "Near Aundh",
  "Near Pimple Saudagar",
  "Near Ravet",
  "Near Thergaon",
  "Near Highway"
];

const generatedData = [];
let counter = 0;

for (const root of rootKeywords) {
  for (const mod of modifiers) {
    for (const geo of geographies) {
      counter++;
      const h1 = `${root} ${mod} ${geo}`;
      const slug = h1.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      
      const title = `${h1} | Exclusive Krisala Developers Insights`;
      const description = `Discover comprehensive details on ${h1}. Explore premium amenities, exact pricing, floor plans, and investment ROI for ${root} in the Pune real estate market.`;
      
      // Generate heavy TF-IDF keywords
      const keywords = `${root.toLowerCase()}, ${root.toLowerCase()} ${mod.toLowerCase()}, ${geo.toLowerCase()}, pune real estate market, flats in tathawade, krisala aventis 2 bhk, krisala aventis 3 bhk, krisala developers projects pune`;

      const content = `Welcome to the ultimate guide on ${h1}. As the Pune real estate market continues to boom, securing your dream home or a high-ROI investment has never been more critical. Whether you are looking for specific details regarding the ${mod.toLowerCase()} of ${root}, or trying to understand why properties ${geo.toLowerCase()} are in such high demand, you are in the right place. Krisala Developers is renowned for delivering uncompromising quality, advanced Aluform construction technology, and premium lifestyle amenities in Tathawade. Explore our exclusive insights on ${root}, compare the market, and discover why investing in Pune's fastest-growing IT corridor is the smartest financial decision you can make today.`;

      const faqs = [
        {
          q: `What is the ${mod.toLowerCase()} for ${root}?`,
          a: `The ${mod.toLowerCase()} for ${root} is designed to offer maximum value in the Pune real estate market. For exact, up-to-date details tailored for properties ${geo.toLowerCase()}, please download our brochure or contact our sales team.`
        },
        {
          q: `Why choose properties ${geo.toLowerCase()}?`,
          a: `Properties ${geo.toLowerCase()} offer unmatched connectivity to major IT hubs, premium educational institutes, and lifestyle destinations. It is a prime choice for IT professionals and NRI investors seeking the best ROI.`
        },
        {
          q: `Are Krisala Developers projects a good investment?`,
          a: `Absolutely. Krisala Developers has a proven track record of delivering high-quality residential projects with excellent appreciation rates, particularly in Tathawade and Wakad corridors.`
        }
      ];

      generatedData.push({
        id: `krisala-domination-${counter}`,
        url_slug: `${slug}.html`,
        folder: "market", // Putting all 5400 pages under /market/
        h1: h1,
        title: title,
        description: description,
        keywords: keywords,
        content: content,
        faqs: faqs
      });
    }
  }
}

fs.writeFileSync("./data/krisala-domination-seo.json", JSON.stringify(generatedData, null, 2));
console.log(`Successfully generated ${generatedData.length} highly optimized SEO JSON objects.`);
