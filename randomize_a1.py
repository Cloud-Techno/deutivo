import json
import random
import re

def randomize_a1():
    filepath = '/Users/ferdiates/Desktop/projects/deutivo/data/exam.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match window.examData = [ ... ]
    match = re.search(r'window\.examData\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        print("Could not find examData")
        return

    data = json.loads(match.group(1))
    
    changed_count = 0
    for item in data:
        if item.get('level') == 'A1' and item.get('category') == 'sprachbaustein':
            # Handle new format (questions array)
            if 'questions' in item:
                for q in item['questions']:
                    if random.choice([True, False]):
                        # Swap 'a' and 'b'
                        old_a = q['a']
                        old_b = q['b']
                        q['a'] = old_b
                        q['b'] = old_a
                        # Update correct key
                        q['correct'] = 'b' if q['correct'] == 'a' else 'a'
                        changed_count += 1
            # Handle legacy format (options array)
            elif 'options' in item and len(item['options']) >= 2:
                # For A1 SB legacy, normally we only have 2 options in the image context, 
                # but if there are more, we just shuffle them.
                # However, the user specifically mentioned A1 Sprachbausteine always being 'a',
                # which refers to the new ones I added.
                pass

    new_content = 'window.examData = ' + json.dumps(data, indent=2, ensure_ascii=False) + ';'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Randomized {changed_count} questions.")

if __name__ == '__main__':
    randomize_a1()
