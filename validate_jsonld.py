import os
import re
import json

def validate_json_ld():
    errors = []
    total_schemas = 0
    
    print("Validating JSON-LD schemas...")
    for root, dirs, files in os.walk("."):
        if '.git' in root or 'venv' in root or 'node_modules' in root:
            continue
            
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                        # Find all script tags with application/ld+json
                        pattern = re.compile(r'<script type="application/ld\+json">(.*?)</script>', re.DOTALL)
                        matches = pattern.findall(content)
                        
                        for i, match in enumerate(matches):
                            total_schemas += 1
                            json_str = match.strip()
                            try:
                                json.loads(json_str)
                            except json.JSONDecodeError as e:
                                errors.append({
                                    'file': filepath,
                                    'schema_index': i + 1,
                                    'error': str(e),
                                    'content': json_str
                                })
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    
    print(f"Validated {total_schemas} JSON-LD schemas.")
    if errors:
        print(f"Found {len(errors)} JSON-LD syntax errors. Below is a sample of 5 errors:")
        for err in errors[:5]:
            print(f"File: {err['file']} (Schema #{err['schema_index']})")
            print(f"Error: {err['error']}")
            print("-" * 40)
        return False
    else:
        print("All JSON-LD schemas are perfectly valid!")
        return True

if __name__ == "__main__":
    validate_json_ld()
