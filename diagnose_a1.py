import json
import re

def diagnose():
    filepath = '/Users/ferdiates/Desktop/projects/deutivo/data/exam.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'window\.examData\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        print("Could not find examData")
        return

    data = json.loads(match.group(1))
    
    for item in data:
        if item.get('level') == 'A1' and item.get('category') == 'sprachbaustein':
            if 'questions' in item:
                answers = [q['correct'] for q in item['questions']]
                a_count = answers.count('a')
                b_count = answers.count('b')
                print(f"ID {item['id']}: a={a_count}, b={b_count}, total={len(answers)}")
            else:
                print(f"ID {item['id']}: No questions array")

if __name__ == '__main__':
    diagnose()
