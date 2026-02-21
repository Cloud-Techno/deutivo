#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fix: Add Teil 3 answer blocks for exams 703, 704, 705 (different indentation pattern)"""
import re

FIXES = {
    703: "13-r, 14-f, 15-f, 16-r, 17-r, 18-r, 19-f, 20-r, 21-f, 22-r, 23-f | 24-b",
    704: "13-r, 14-f, 15-r, 16-f, 17-r, 18-f, 19-r, 20-f, 21-r, 22-f, 23-r | 24-b",
    705: "13-r, 14-f, 15-r, 16-f, 17-r, 18-r, 19-f, 20-r, 21-f, 22-r, 23-f | 24-a",
}

with open("data/exam.js", "r", encoding="utf-8") as f:
    src = f.read()

for exam_id, answers in FIXES.items():
    answer_html = f"""
<div style='padding:20px;border-left:5px solid #e74c3c;background:#f8f9fa;margin-top:10px;'>
  <h3>📝 Lösungen Teil 3 ({exam_id})</h3>
  <strong>{answers}</strong>
</div>"""

    # Find the specific answer block for this exam.
    # Pattern: Lösungen Teil 2 (703) followed by closing </div> then the indented backtick
    pattern = rf"(Lösungen Teil 2 \({exam_id}\).*?</div>\s*\n)(\s*`\n\s*\}},)"
    match = re.search(pattern, src, re.DOTALL)
    if not match:
        print(f"WARNING: Could not find answer block for exam {exam_id}!")
        continue

    # Insert answer_html before the closing backtick
    old_end = match.group(2)
    new_end = answer_html + "\n" + old_end

    src = src[:match.start(2)] + new_end + src[match.end(2):]
    print(f"OK: Exam {exam_id} answer block fixed.")

with open("data/exam.js", "w", encoding="utf-8") as f:
    f.write(src)

print("\nDone! Teil 3 answers for 703, 704, 705 injected.")
