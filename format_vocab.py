#!/usr/bin/env python3
import re

input_file = '/Users/ferdiates/Desktop/projects/deutivo/data/vocab.js'
output_file = '/Users/ferdiates/Desktop/projects/deutivo/data/vocab_formatted.js'

with open(input_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

output = []
current_obj = []
in_object = False

for line in lines:
    stripped = line.strip()
    
    if stripped.startswith('{'):
        in_object = True
        current_obj = []
    
    if in_object:
        current_obj.append(stripped)
    
    if stripped.endswith('},') or (stripped.endswith('}') and in_object):
        # Join all lines into one
        obj_str = ' '.join(current_obj)
        # Clean up extra spaces
        obj_str = re.sub(r'\s+', ' ', obj_str)
        output.append('  ' + obj_str + '\n')
        in_object = False
        current_obj = []
    elif not in_object:
        output.append(line)

with open(output_file, 'w', encoding='utf-8') as f:
    f.writelines(output)

print(f"✅ Formatted file saved to: {output_file}")
print("📝 Review the file, then replace the original if it looks good.")
