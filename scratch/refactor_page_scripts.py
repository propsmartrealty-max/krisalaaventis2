import re

with open('app/[locale]/page.tsx', 'r') as f:
    content = f.read()

# The scripts at the end of the HTML string look like this:
# <script src="assets/js/config.js" defer></script><script src="assets/js/oracle.js" defer></script><div id="activity-notify" ...></div><script>(function() {...})()</script><script src="assets/js/script.min.js" defer></script>` }} />

# We will just replace everything from <script src="assets/js/config.js" defer></script> onwards.
# Actually, the activity-notify div is in the middle of the scripts!
# Let's extract the inline script content first.
inline_script_match = re.search(r'<script>\(function\(\) \{const activities = \[\{ msg.*?\)\(\);\}</script>', content)
if inline_script_match:
    inline_script = inline_script_match.group(0).replace('<script>', '').replace('</script>', '')
    content = content.replace(inline_script_match.group(0), '')

content = content.replace('<script src="assets/js/config.js" defer></script>', '')
content = content.replace('<script src="assets/js/oracle.js" defer></script>', '')
content = content.replace('<script src="assets/js/script.min.js" defer></script>', '')
# Note: script.min.js is already in layout.tsx, so we don't need to add it again.

# Add the imports and JSX tags
jsx_wrapper = f"""import Script from "next/script";

export default function Home() {{
  return (
    <main suppressHydrationWarning>
      <Script src="/assets/js/config.js" strategy="lazyOnload" />
      <Script src="/assets/js/oracle.js" strategy="lazyOnload" />
      <Script id="activity-notify" strategy="lazyOnload">
        {{`
          {inline_script if inline_script_match else ''}
        `}}
      </Script>
"""

content = content.replace('export default function Home() {\n  return (\n    <main suppressHydrationWarning>\n', jsx_wrapper)

with open('app/[locale]/page.tsx', 'w') as f:
    f.write(content)
