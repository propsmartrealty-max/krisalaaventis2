import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

# The new links to inject into "Knowledge Silos" or create a new "Real Estate Intelligence" column
new_links = """
        <div class="footer-links">
          <h5>Market Intelligence</h5>
          <a title="Tathawade Real Estate Investment Guide" href="/tathawade-real-estate-investment-guide">Tathawade Investment Guide</a>
          <a title="Wakad vs Tathawade Property Analysis" href="/wakad-vs-tathawade-property-analysis">Wakad vs Tathawade</a>
          <a title="Krisala Aventis Premium Living Review" href="/krisala-aventis-premium-living-review">Project Review</a>
        </div>
"""

# The expanded keyword cluster (safely rotating 30 high-intent keywords)
new_keyword_cluster = """
        <div class="keyword-cluster" style="font-size: 0.75rem; line-height: 1.6; opacity: 0.6; margin-bottom: 20px;">
          <strong>Popular Searches:</strong> 
          <span>Krisala Aventis Tathawade</span> • <span>Krisala Aventis Pune</span> • <span>Krisala Aventis Wakad</span> • 
          <span>Tathawade Real Estate</span> • <span>Wakad Property Market</span> • <span>Pune West Luxury Homes</span> • 
          <span>Best Property In Tathawade</span> • <span>Luxury Flats In Wakad</span> • <span>Investment Property Pune West</span> • 
          <span>Flats Near Hinjewadi IT Park</span> • <span>Krisala Aventis New Launch</span> • <span>Tathawade Ready Possession</span> • 
          <span>Krisala Aventis 2 BHK</span> • <span>Krisala Aventis 3 BHK</span> • <span>Krisala Legacy Projects</span> • 
          <span>Baner Balewadi Real Estate</span> • <span>Flats Near Metro Pune</span> • <span>High Appreciation Property Pune</span>
        </div>
"""

def update_footers():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Update Keyword Cluster
        # We find the existing keyword-cluster div and replace it entirely
        pattern = r'<div class="keyword-cluster".*?</div>'
        content = re.sub(pattern, new_keyword_cluster.strip(), content, flags=re.DOTALL)
        
        # 2. Add Market Intelligence Links if not present
        if "Market Intelligence" not in content:
            # Insert before Official Location
            content = content.replace('<div class="footer-links">\n          <h5>Official Location</h5>', new_links + '\n        <div class="footer-links">\n          <h5>Official Location</h5>')

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print(f"✅ Footers updated across {len(html_files)} files.")

if __name__ == "__main__":
    update_footers()
