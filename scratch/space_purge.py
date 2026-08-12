import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def purge_empty_spaces():
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # 1. Remove sections with no meaningful content (only whitespace/tags/comments)
                # This matches <section ...> ... </section> where inside is only space or comments
                content = re.sub(r'<section[^>]*>\s*(<!--.*?-->\s*)*</section>', '', content, flags=re.DOTALL)
                
                # 2. Fix redundant closing tags
                # This is harder without a full parser, but we can look for </section>\s*</section> 
                # where there aren't enough <section> tags.
                # We'll just do a global balance check.
                open_count = content.count('<section')
                close_count = content.count('</section>')
                
                if close_count > open_count:
                    # Very crude: remove the last few </section> tags if they are redundant
                    diff = close_count - open_count
                    for _ in range(diff):
                        last_idx = content.rfind('</section>')
                        if last_idx != -1:
                            # Check if it's followed by </body> or <footer> (likely redundant)
                            # Or just remove it if it's double
                            double_idx = content.rfind('</section>\n  </section>')
                            if double_idx != -1:
                                content = content[:double_idx+10] + content[double_idx+23:]
                            else:
                                content = content[:last_idx] + content[last_idx+10:]

                # 3. Final Whitespace Purge
                content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)

                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Sanitized: {file}")

if __name__ == "__main__":
    purge_empty_spaces()
