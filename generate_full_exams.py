
import json
import random

# Titles and Topics to mix and match for variety in 15 exams
topics_t1 = [
    ("Gesundheit", "Äpfel essen", "Sport im Winter"),
    ("Einkaufen", "Neue Öffnungszeiten", "Rabatte im Supermarkt"),
    ("Verkehr", "Bus Verspätung", "Neue U-Bahn"),
    ("Wohnen", "Nachmieter gesucht", "Möbel zu verkaufen"),
    ("Freizeit", "Fest im Park", "Kinoabend"),
    ("Arbeit", "Jobangebot", "Büro Umzug"),
    ("Schule", "Kursraum Änderung", "Hausaufgaben Hilfe"),
    ("Reisen", "Zug fällt aus", "Billige Flüge"),
    ("Einladung", "Geburtstagsfeier", "Hochzeit"),
    ("Termine", "Arzttermin verschoben", "Friseur Termin"),
    ("Verkauf", "Fahrrad zu verkaufen", "Laptop günstig"),
    ("Suche", "Verlorene Katze", "Schlüssel gefunden"),
    ("Information", "Bibliothek geschlossen", "Wasser abgestellt"),
    ("Wetter", "Sturmwarnung", "Sonne am Wochenende"),
    ("Essen", "Neues Restaurant", "Mittagsmenü")
]

topics_t2_emails = [
    "Einladung zum Kaffee", "Probleme im Deutschkurs", "Frage zur Hausaufgabe",
    "Verabredung am Wochenende", "Besuch der Eltern", "Urlaubsplanung",
    "Krankmeldung", "Dankeschön für das Geschenk", "Terminbestätigung",
    "Anfrage Mietwagen", "Hotel Reservierung", "Ticketkauf Konzert", 
    "Fundsachen Büro", "Rezept Frage", "Treffen Sportverein"
]

topics_t3_ads = [
    ("Restaurant", "Italienisch vs Deutsch"), ("Zug", "Früh vs Spät"), 
    ("Wohnung", "Klein vs Groß"), ("Kurs", "Morgen vs Abend"), 
    ("Flohmarkt", "Kaufen vs Verkaufen"), ("Arzt", "Kind vs Allgemein"),
    ("Hotel", "Stadt vs Land"), ("Auto", "Mieten vs Kaufen"),
    ("Job", "Vollzeit vs Teilzeit"), ("Schule", "Musik vs Kunst"),
    ("Computer", "Neu vs Gebraucht"), ("Handy", "Vertrag vs Prepaid"),
    ("Reise", "Bus vs Flug"), ("Kino", "Action vs Liebe"),
    ("Sport", "Fitness vs Schwimmen")
]

# Generate 15 Exams
exams = []
start_id = 200

for i in range(15):
    # --- TEIL 1 Content ---
    t1_topic = topics_t1[i % len(topics_t1)]
    category = t1_topic[0]
    
    teil1_html = f"""
    <div class="exam-part">
      <h3 style="color:var(--primary); border-bottom:1px solid #ddd; padding-bottom:5px;">Teil 1</h3>
      <p>Lesen Sie die Texte. Welche Überschrift passt?</p>
      <div style='background:#f9f9f9; padding:10px; margin-bottom:10px; border-left:3px solid var(--secondary);'>
        <strong>Text 1</strong><br>
        Hier ist eine wichtige Information zum Thema {category}: {t1_topic[1]}. Bitte beachten Sie die neuen Regelungen ab Montag.
      </div>
      <div style='background:#f9f9f9; padding:10px; margin-bottom:10px; border-left:3px solid var(--secondary);'>
        <strong>Text 2</strong><br>
        Neuigkeiten für alle Interessierten: {t1_topic[2]}. Kommen Sie vorbei und machen Sie mit!
      </div>
    </div>
    """
    
    q1 = f"<strong>Teil 1 - Text 1:</strong> Was ist das Thema?<br>a) {t1_topic[1]}<br>b) {t1_topic[2]}<br>c) Gar nichts"
    q2 = f"<strong>Teil 1 - Text 2:</strong> Worum geht es?<br>a) {t1_topic[1]}<br>b) {t1_topic[2]}<br>c) Wetter"
    
    # --- TEIL 2 Content ---
    t2_subject = topics_t2_emails[i % len(topics_t2_emails)]
    sender = ["Lisa", "Tom", "Maria", "Klaus", "Ali", "Sarah"][i % 6]
    
    teil2_html = f"""
    <div class="exam-part" style="margin-top:20px;">
      <h3 style="color:var(--primary); border-bottom:1px solid #ddd; padding-bottom:5px;">Teil 2</h3>
      <p>Lesen Sie die E-Mail und wählen Sie: Richtig oder Falsch?</p>
      <div style='border:1px solid #ccc; padding:15px; background:white; font-family:sans-serif;'>
        <strong>Von:</strong> {sender}<br>
        <strong>Betreff:</strong> {t2_subject}<br><br>
        Hallo,<br>
        ich hoffe es geht dir gut. {t2_subject} ist unser Thema. Wir müssen uns bald treffen.
        Am Dienstag habe ich Zeit. Bring bitte 10 Euro mit.<br><br>
        Viele Grüße<br>{sender}
      </div>
    </div>
    """
    
    q3 = f"<strong>Teil 2:</strong> {sender} hat am Dienstag Zeit. (Richtig/Falsch)"
    q4 = f"<strong>Teil 2:</strong> Man soll 20 Euro mitbringen. (Richtig/Falsch)"
    
    # --- TEIL 3 Content ---
    t3 = topics_t3_ads[i % len(topics_t3_ads)]
    
    teil3_html = f"""
    <div class="exam-part" style="margin-top:20px;">
      <h3 style="color:var(--primary); border-bottom:1px solid #ddd; padding-bottom:5px;">Teil 3</h3>
      <p>Sie suchen: {t3[0]}. Was wählen Sie?</p>
      <div style='display:flex; gap:10px; flex-wrap:wrap;'>
        <div style='border:1px solid #ddd; padding:10px; flex:1; min-width:150px;'>
            <strong>A) Angebot 1</strong><br>
            Das beste Angebot für {t3[1]}. Gültig ab sofort.
        </div>
        <div style='border:1px solid #ddd; padding:10px; flex:1; min-width:150px;'>
            <strong>B) Angebot 2</strong><br>
            Spezialangebot: {t3[2]}. Nur heute!
        </div>
      </div>
    </div>
    """
    
    q5 = f"<strong>Teil 3:</strong> Sie wollen {t3[1]}. Welches Angebot passt?<br>a) Angebot 1<br>b) Angebot 2"
    
    # Combine
    full_content = teil1_html + teil2_html + teil3_html
    sub_questions = [q1, q2, q3, q4, q5]
    
    ans_html = f"""
    <strong>Lösung Teil 1:</strong><br>1. a) {t1_topic[1]}<br>2. b) {t1_topic[2]}<br><br>
    <strong>Lösung Teil 2:</strong><br>3. Richtig<br>4. Falsch (10 Euro)<br><br>
    <strong>Lösung Teil 3:</strong><br>5. a) Angebot 1 ({t3[1]})
    """

    item = {
        "id": start_id + i,
        "type": "TELC", # User wants TELC
        "level": "A1",
        "category": "Lesen",
        "title": f"Modelltest {i+1}: Lesen (Teil 1–3)",
        "task": "Lesen Sie die Texte und lösen Sie die Aufgaben für Teil 1, 2 und 3.",
        "content": full_content,
        "sub_questions": sub_questions,
        "answer": ans_html
    }
    exams.append(item)

# READ EXISTING DATA to preserve other items
import os
existing_data = []

# We will try to read standard json form data/exam.js
# Since we know the format is `window.examData = [...];`
try:
    with open("data/exam.js", "r", encoding="utf-8") as f:
        raw = f.read()
        # strip
        json_str = raw.replace("window.examData =", "").strip().rstrip(";")
        existing_data = json.loads(json_str) 
except Exception as e:
    print(f"Error reading: {e}") 
    # Fallback: empty list or critical failure check
    
# Filter out OLD Reading/Lesen items (IDs 200-214 or category=Lesen) to replace them
clean_data = [x for x in existing_data if x.get("category") != "Lesen"]

# Add new exams
final_data = clean_data + exams

# Write back
out_str = "window.examData = " + json.dumps(final_data, indent=4) + ";"
with open("data/exam.js", "w", encoding="utf-8") as f:
    f.write(out_str)

print("Generated 15 Full Exams (Teil 1-3 each).")
