with open('seo_generator_v2.py', 'r') as f:
    text = f.read()

# Replace url_slug with url_slug_clean in the template for canonical and og:url
text = text.replace('href="https://krisalaventis.in/$folder/$url_slug"', 'href="https://krisalaventis.in/$folder/$url_slug_clean"')
text = text.replace('content="https://krisalaventis.in/$folder/$url_slug"', 'content="https://krisalaventis.in/$folder/$url_slug_clean"')

# In the python logic for related links
text = text.replace('href="/{rp["folder"]}/{rp["url_slug"]}"', 'href="/{rp[\'folder\']}/{rp[\'url_slug\'].replace(\'.html\', \'\')}"')

# Make sure we pass url_slug_clean to the template
text = text.replace("url_slug=page['url_slug'],", "url_slug=page['url_slug'],\n            url_slug_clean=page['url_slug'].replace('.html', ''),")

with open('seo_generator_v2.py', 'w') as f:
    f.write(text)

with open('update_sitemap.py', 'r') as f:
    sitemap_script = f.read()

sitemap_script = sitemap_script.replace("url_slug']}", "url_slug'].replace('.html', '')}")

with open('update_sitemap.py', 'w') as f:
    f.write(sitemap_script)
