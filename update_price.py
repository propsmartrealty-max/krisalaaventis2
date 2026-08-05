import os

def update_price_globally(directory="."):
    replacements = {
        '"lowPrice": "8900000"': '"lowPrice": "8900000"',
        '"price": "8900000"': '"price": "8900000"',
        '8900000': '8900000',
        '₹89 Lakhs': '₹89 Lakhs',
        '₹89L': '₹89L',
        '₹89.00 Lakhs': '₹89.00 Lakhs',
        'inr2bhk = 8900000': 'inr2bhk = 8900000',
        '₹78 Lakhs - ₹89 Lakhs': '₹78 Lakhs - ₹89 Lakhs',
        '₹75 Lakhs - ₹89 Lakhs': '₹75 Lakhs - ₹89 Lakhs'
    }

    extensions = ('.py', '.html', '.txt', '.md', '.xml')
    skip_dirs = {'.git', 'node_modules'}
    
    updated_files = 0

    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        for file in files:
            if not file.endswith(extensions):
                continue
                
            filepath = os.path.join(root, file)
            
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
            new_content = content
            for old_text, new_text in replacements.items():
                new_content = new_content.replace(old_text, new_text)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                updated_files += 1

    print(f"Global Price Update Complete. Updated {updated_files} files.")

if __name__ == "__main__":
    update_price_globally()
