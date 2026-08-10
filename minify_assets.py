import os
import re

def minify_html(content):
    # Remove HTML comments (but preserve IE conditional comments if any exist, though unlikely)
    content = re.sub(r'<!--(?!\s*(?:\[if [^\]]+]|<!|>))(?:(?!-->).)*-->', '', content, flags=re.DOTALL)
    
    # Remove whitespace between tags
    content = re.sub(r'>\s+<', '><', content)
    
    # Remove leading and trailing whitespace from each line
    lines = [line.strip() for line in content.split('\n')]
    
    # Join the lines back together
    content = ''.join(lines)
    
    return content

def minify_all():
    total_files = 0
    total_original_size = 0
    total_minified_size = 0
    
    for root, dirs, files in os.walk("."):
        if '.git' in root or 'venv' in root or 'node_modules' in root:
            continue
            
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                
                try:
                    original_size = os.path.getsize(filepath)
                    total_original_size += original_size
                    
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    minified_content = minify_html(content)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(minified_content)
                        
                    minified_size = os.path.getsize(filepath)
                    total_minified_size += minified_size
                    total_files += 1
                    
                except Exception as e:
                    print(f"Error minifying {filepath}: {e}")
                    
    print(f"Minification complete for {total_files} files.")
    
    if total_original_size > 0:
        savings = (total_original_size - total_minified_size) / (1024 * 1024)
        percentage = ((total_original_size - total_minified_size) / total_original_size) * 100
        print(f"Original size: {total_original_size / (1024*1024):.2f} MB")
        print(f"Minified size: {total_minified_size / (1024*1024):.2f} MB")
        print(f"Total space saved: {savings:.2f} MB ({percentage:.2f}%)")
        print("This will directly improve Core Web Vitals (LCP, FCP).")

if __name__ == "__main__":
    minify_all()
