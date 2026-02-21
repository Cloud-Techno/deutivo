#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Injects Leseverstehen Teil 3 into C1 Lesen exams 701-715 in exam.js
"""
import re

# ── DATA ────────────────────────────────────────────────────────────────────
# Each entry: (exam_id, article_title, paragraphs[], statements[(num,text)], q24_a, q24_b, q24_c, correct_24, answers_13_23)
# answers_13_23: list of 11 chars 'r','f','-' for 13..23

DATA = [

# ── 701 ── Thema: Muttersprachlicher Unterricht (from uploaded image – exact match)
(701,
"Plädoyer für den Deutschunterricht",
[
"Wenn junge Menschen die Schule verlassen, beherrschen sie Sprache und Schrift nicht so, wie es die Gesellschaft von ihnen erwartet. Eine Umfrage der Industrie- und Handelskammer Köln zum Beispiel ergab jüngst, dass die Personalchefs großer Ausbildungsbetriebe mit den Deutschkenntnissen vieler Schulabgänger nicht zufrieden sind. Viele Hochschullehrer trauen der Aussagekraft des Abiturs nicht mehr und fordern Studieneingangsprüfungen. Häufiger Mangel in den Arbeiten von Anfangssemestern sind gedankliche und sprachliche Ungenauigkeiten sowie der Verzicht auf Untersuchungsfragen und einen roten Faden.",
"Eine der Ursachen für diese Defizite liegt in dem unzureichenden Anteil an Deutschstunden in den Schulformen des Sekundarbereichs. Diese Vermutung wird bekräftigt durch ein Ergebnis der jüngsten Bildungsstudie der OECD, eines Zusammenschlusses von 29 Industrieländern. Während in Deutschland auf den Fremdsprachenunterricht 21 Prozent der gesamten Unterrichtszeit entfallen, widmen ihm die Schüler aus vergleichbaren Industrieländern im Durchschnitt nur 11 Prozent ihrer Zeit. Dagegen ist der Anteil des muttersprachlichen Unterrichts am Gesamtunterricht in Deutschland deutlich kleiner als in anderen führenden Industrieländern: Mit 14 Prozent liegt Deutschland hinter den USA und Frankreich (jeweils 17 Prozent), Schweden (22 Prozent) sowie Irland und Italien (23 Prozent).",
"Entsteht ein neues gesellschaftliches Problem, wie etwa die zunehmende Gewalt von Jugendlichen, so wird der Deutschunterricht mit der Behandlung beauftragt. Wird ein neues Fach eingerichtet, wie Politik oder Technik, oder werden Vertiefungen ab Klasse 9 angeboten, knapst man bei der Muttersprache noch eine Stunde ab, sodass in der Sekundarstufe I von den früheren fünf Wochenstunden nur noch drei übrig geblieben sind. Mit dieser steten Verknappung muss Schluss sein. Deutsch ist kein Allerweltsfach, in dem oberflächlich immer neue Probleme besprochen werden. Vielmehr folgen mündliche und schriftliche Äußerungen Regeln der Logik und Rhetorik, wenn sie als wahr gelten und wirksam werden sollen. Mindestens vier Stunden pro Woche sollte der Deutschunterricht in den höheren Jahrgangsstufen des Sekundarbereichs I und in den Grundkursen der Oberstufe beanspruchen dürfen.",
"Weshalb ist mehr muttersprachlicher Unterricht nötig? Zunächst wird immer wieder davon gesprochen, dass Schüler beim Lernen vor allem Schlüsselqualifikationen erwerben sollen. Sieht man sich einmal die fünf in der pädagogischen Literatur am häufigsten genannten Qualifikationen an: Kommunikationsfähigkeit, Kooperationsfähigkeit, Flexibilität, Kreativität, Denken in Zusammenhängen, so wird sofort klar, dass Sprache nicht nur Medium, sondern Gegenstand dieser Leistungen ist. Kommunikation etwa bedeutet die Fähigkeit, sachkundig ein Gespräch zu führen, die Diskussionsteilnehmer zu verstehen, die angemessene Form der Antwort zu wählen, Takt zu üben und Kompromisslinien zu finden.",
"Die neuen Informationstechnologien haben hauptsächlich Textmaschinen hervorgebracht. Beim Aufrufen einer Datei auf dem PC stoßen Schüler auf Texte verschiedener Art, die identifiziert, analysiert und bewertet sein wollen. Eine neue Qualifikation werden wir unseren Schülern vor allem vermitteln müssen: die Bewertung von Informationen in der Datenfülle. Dazu ist analytische Kompetenz erforderlich. Aber auch die Textherstellung folgt vertrauten Formen: Brief, Nachricht, Bekenntnis und Geschichte. E-Mails fördern schon jetzt eine neue Briefleidenschaft, von der das 18. Jahrhundert mit seiner Briefkultur nur träumen konnte. Man lese vor der nächsten Mail noch einmal in Goethes Werther!",
"In allen neuen Schulrichtlinien wird wieder verstärkt der fächerverbindende Unterricht gefordert. Sieht man einmal davon ab, dass der Projektunterricht mit Regelmäßigkeit alle paar Jahrzehnte als die Lösung aller didaktischen Nöte angeboten wird, steckt hinter der Idee ein richtiges Konzept: Der Unterricht sollte stets sichtbar machen, aus welcher umfassenden Frage das anstehende Problem erwachsen ist und was seine Klärung zu deren Lösung beitragen kann. Insofern ist die Projektmethode nach Phasen systematischen Unterrichts hin und wieder anzuwenden.",
"Deutschlehrer übernehmen gern die Verantwortung für einen erweiterten Auftrag für Bildung und Unterricht in der Schule. Sie brauchen dafür aber einen höheren Anteil vom gesamten Stundenkontingent – wenigstens die durchschnittliche Stundenzahl der OECD-Staaten.",
],
[
(13,"Das Abitur wird nach wie vor als Qualitätsstandard akzeptiert."),
(14,"In Deutschland gibt es mehr Fremdsprachenunterricht als in anderen ähnlichen Ländern."),
(15,"Oft wird der Deutschunterricht gekürzt, wenn an der Schule ein weiteres Fach eingeführt wird."),
(16,"Die Muttersprache ist nicht nur Instrument, sondern auch Gegenstand weiterer Fähigkeiten."),
(17,"Schüler müssen Kurse zur textbezogenen Software besuchen."),
(18,"Projektunterricht sollte endlich aufgegeben werden."),
(19,"Mit Texten umgehen zu können, spielt eine entscheidende Rolle bei der fächerübergreifenden Problemlösung."),
(20,"Deutschunterricht hat eine Brückenfunktion für die anderen Fächer."),
(21,"Literatur wird in der Hochschulgermanistik immer die gleiche Rolle spielen wie heute."),
(22,"In Nordrhein-Westfalen soll Deutsch an der Schule in allen Fächern mehr Beachtung finden."),
(23,"Schüler sollten wieder besser lernen, wichtige Themen schriftlich zu erörtern."),
],
"Deutschunterricht an weiterführenden Schulen",
"Plädoyer für die Aufwertung des muttersprachlichen Unterrichts",
"Untersuchung des Sprachunterrichts auf europäischer Ebene",
"b",
["f","r","r","r","-","f","r","-","-","-","r"],
),

# ── 702 ── Thema: Stadtplanung & Fahrradverkehr
(702,
"Stadt der Zukunft: Wie Fahrräder unsere Innenstädte verändern",
[
"In vielen europäischen Großstädten hat ein grundlegender Wandel begonnen: Der private Pkw verliert an Bedeutung, während das Fahrrad als ernstzunehmendes Verkehrsmittel immer stärker in den Fokus der Stadtplaner rückt. Städte wie Amsterdam, Kopenhagen oder Utrecht gelten heute als Vorbilder für eine gelungene Fahrradinfrastruktur, die nicht nur ökologisch, sondern auch wirtschaftlich vorteile bietet. In Deutschland hinkt man vielerorts noch hinterher, doch die Richtung ist klar: Die Verkehrswende auf zwei Rädern hat begonnen.",
"Der Ausbau von Radwegen ist dabei nur ein erster Schritt. Viel wichtiger ist die konsequente Trennung der Verkehrsströme. Überall dort, wo Fahrräder und Kraftfahrzeuge auf engem Raum miteinander konkurrieren, entstehen gefährliche Situationen. Breite, gut markierte Radstreifen, die durch physische Barrieren vom Autoverkehr getrennt sind, senken die Unfallzahlen nachweislich. In Kopenhagen etwa ist die Zahl der schweren Fahrradunfälle in den letzten zwei Jahrzehnten trotz eines massiven Anstiegs der Radfahrerzahlen kontinuierlich gesunken.",
"Ein weiterer Schlüsselfaktor ist die sichere Abstellmöglichkeit. Wer sein Fahrrad nicht sicher parken kann, greift im Zweifel doch wieder auf das Auto zurück. Moderne Fahrradparkhäuser mit Videoüberwachung und Lademöglichkeiten für E-Bikes entstehen daher direkt an Bahnhöfen und in Innenstadtlagen. Sie machen das Fahrrad zur letzten Meile einer multimodalen Reisekette: Bahn fahren, Rad nehmen, ankommen. Diese Kombination gilt als besonders zukunftsfähig für Pendler aus dem Umland.",
"Die wirtschaftliche Dimension der Fahrradkultur wird häufig unterschätzt. Studien belegen, dass Fahrradfahrer im Einzelhandel zwar weniger pro Einkauf ausgeben als Autofahrer, dafür aber deutlich häufiger in lokalen Geschäften einkaufen. Zudem sind die Infrastrukturkosten für einen Radweg pro Kilometer deutlich geringer als für eine Straße. Hinzu kommen die eingesparten Kosten durch weniger Krankenhausbesuche, da regelmäßiges Radfahren die Volksgesundheit nachweislich verbessert. In den Niederlanden wird dieser volkswirtschaftliche Nutzen bereits offiziell in Stadtentwicklungskonzepte eingerechnet.",
"Kritiker des Fahrradbooms weisen jedoch auf die Grenzen hin. Nicht jeder ist in der Lage, täglich Fahrrad zu fahren – ältere Menschen, körperlich eingeschränkte Personen oder Familien mit kleinen Kindern haben oft keine realistische Alternative zum Auto. Eine Stadt, die nur auf das Fahrrad setzt, riskiert soziale Ausgrenzung. Daher fordern Stadtplaner einen inklusive Ansatz, der verschiedene Mobilitätsformen nebeneinander ermöglicht und fördert, ohne eine einzige Lösung zu bevorzugen.",
"Die Zukunft des städtischen Verkehrs liegt also nicht im Entweder-oder, sondern im intelligenten Miteinander. Fahrräder, öffentliche Verkehrsmittel, Carsharing und in zukünftigen Gebiete vielleicht auch autonome Fahrzeuge müssen nahtlos ineinandergreifen. Digitale Plattformen, die Echtzeitdaten zu Verfügbarkeit und Auslastung aller Verkehrsmittel bündeln, werden dabei eine entscheidende Rolle spielen. Die smarte Stadt der Zukunft ist nicht autofrei, aber sie ist sehr viel fahrradfreundlicher als die Städte von heute.",
"Letztendlich ist die Förderung des Radverkehrs eine politische Entscheidung, die Mut erfordert. Parkplätze zu streichen und Fahrspuren in Radwege umzuwandeln, bringt kurzfristig Proteste. Doch die Lebensqualität in Städten, die diesen Schritt konsequent gegangen sind, hat sich messbar verbessert: weniger Lärm, sauberere Luft und mehr soziales Miteinander im öffentlichen Raum.",
],
[
(13,"In Kopenhagen ist die Zahl der Fahrradunfälle gestiegen, weil mehr Menschen Rad fahren."),
(14,"Sichere Abstellmöglichkeiten sind ein wichtiger Faktor, um Menschen zu mehr Radfahren zu bewegen."),
(15,"Fahrradfahrer geben pro Einkauf mehr Geld aus als Autofahrer."),
(16,"In den Niederlanden wird der wirtschaftliche Nutzen des Radverkehrs in Stadtplanungen berücksichtigt."),
(17,"Ältere Menschen profitieren besonders von modernen Fahrradinfrastrukturen."),
(18,"Die Trennung von Rad- und Autoverkehr erhöht die Sicherheit nachweislich."),
(19,"Stadtplaner fordern, dass Autos aus Innenstädten vollständig verbannt werden."),
(20,"Regelmäßiges Radfahren hat positive Auswirkungen auf die Gesundheit der Bevölkerung."),
(21,"Digitale Plattformen sollen verschiedene Verkehrsmittel in Echtzeit verknüpfen."),
(22,"Das Fahrrad eignet sich als Verlängerung einer Bahnreise für Pendler."),
(23,"Die Einführung von Fahrradwegen führt immer sofort zu einer breiten Akzeptanz in der Bevölkerung."),
],
"Fahrradinfrastruktur im internationalen Vergleich",
"Radverkehr als Teil einer modernen Stadtentwicklung",
"Die Geschichte des Fahrrads in Europa",
"b",
["f","r","f","r","-","r","f","r","r","r","f"],
),

# ── 703 ── Thema: Online-Shopping & Verbraucherrechte
(703,
"Klicken und Klagen: Verbraucherrechte im Online-Handel",
[
"Der Online-Handel hat in den vergangenen Jahren einen beispiellosen Aufschwung erlebt. Immer mehr Menschen kaufen Kleidung, Elektronikartikel oder sogar Lebensmittel bequem von der Couch aus. Doch mit dem Boom wächst auch die Zahl der Beschwerden: falsche Produktbeschreibungen, schwierige Rücksendungen und undurchsichtige Bezahlvorgänge sind nur einige der häufigsten Probleme, mit denen Verbraucher konfrontiert werden. Die Frage ist, wie gut die rechtlichen Rahmenbedingungen die Konsumenten wirklich schützen.",
"Im europäischen Recht gilt beim Online-Kauf grundsätzlich ein 14-tägiges Widerrufsrecht, das bedeutet, dass Käufer Waren ohne Angabe von Gründen zurückschicken dürfen. In der Praxis gestaltet sich dies jedoch oft komplizierter. Manche Anbieter verlangen den Originalkarton, andere akzeptieren nur unbenutzte Ware, wieder andere verlangen eine Rücksendegebühr. Was nach dem Gesetz klar geregelt scheint, führt in der Realität häufig zu Konflikten. Verbraucherschutzorganisationen verzeichnen eine konstant hohe Zahl von Anfragen rund um das Thema Rückgabe.",
"Ein besonders problematisches Feld sind gefälschte Bewertungen. Viele Online-Händler kaufen positive Rezensionen, um ihre Produkte besser erscheinen zu lassen. Für Verbraucher ist es oft unmöglich, echte von gekauften Bewertungen zu unterscheiden. Algorithmen der großen Plattformen sollen zwar gefälschte Rezensionen herausfiltern, doch Studien zeigen, dass ein erheblicher Anteil trotzdem online bleibt. Die EU-Kommission arbeitet an verschärften Transparenzregeln, die Plattformen zur Überprüfung von Bewertungen verpflichten sollen.",
"Auch im Bereich Datenschutz lauern Gefahren. Beim Online-Shopping hinterlassen Verbraucher umfangreiche Datenspuren: Kaufverhalten, Suchanfragen und Zahlungsdaten werden systematisch ausgewertet. Händler nutzen diese Informationen, um dynamische Preissysteme einzusetzen – das bedeutet, dass derselbe Artikel für verschiedene Nutzer unterschiedlich viel kostet. Wer oft und viel kauft, zahlt manchmal mehr als ein Neukunde. Diese Praxis ist in der EU zwar umstritten, aber nicht generell verboten.",
"Ein weiteres zunehmendes Problem ist die Verlängerung der Lieferzeiten ohne Ankündigung. Viele Händler werben mit schneller Zustellung, die dann in der Praxis nicht eingehalten wird. Rechtlich haben Verbraucher bei deutlichen Verzögerungen das Recht, vom Kauf zurückzutreten und eine vollständige Rückerstattung zu verlangen. Doch viele wissen nicht, dass ihnen dieses Recht zusteht, und warten geduldig, auch wenn die Ware wochen- oder monatelang ausbleibt.",
"Insgesamt zeigt sich, dass die rechtlichen Schutzmechanismen zwar vorhanden, aber in der Praxis oft schwer durchzusetzen sind. Verbraucherzentralen empfehlen daher, bei Ungereimtheiten sofort schriftlich zu reklamieren und Fristen zu dokumentieren. Auch die Wahl einer sicheren Zahlungsmethode ist entscheidend: Kreditkartenzahlungen und bestimmte Bezahldienste bieten Käufern oft zusätzliche Absicherungen im Streitfall. Informiert shoppen schützt besser als jedes Gesetz.",
"Die Zukunft des Online-Handels wird maßgeblich davon abhängen, wie viel Vertrauen die Konsumenten in die Plattformen haben. Transparente Bewertungssysteme, ehrliche Preisgestaltung und unkomplizierte Rückgabeprozesse sind keine Luxus, sondern die Grundlage für eine nachhaltige Kundenbeziehung. Unternehmen, die dies verstehen, werden langfristig die Gewinner sein – auch im harten Wettbewerb des digitalen Marktes.",
],
[
(13,"Das 14-tägige Widerrufsrecht gilt bei Online-Käufen in der gesamten EU."),
(14,"Rücksendebedingungen sind bei allen Online-Händlern einheitlich geregelt."),
(15,"Gefälschte Bewertungen sind für Verbraucher in der Regel leicht zu erkennen."),
(16,"Dynamische Preissysteme bedeuten, dass verschiedene Nutzer unterschiedliche Preise zahlen können."),
(17,"Die EU-Kommission plant strengere Regeln zur Überprüfung von Online-Bewertungen."),
(18,"Bei erheblichen Lieferverspaetungen können Käufer vom Kauf zurücktreten."),
(19,"Verbraucherzentralen empfehlen, bei Problemen mündlich zu reklamieren."),
(20,"Kreditkartenzahlungen bieten Käufern im Streitfall zusätzliche Absicherung."),
(21,"Online-Händler sind in Deutschland verpflichtet, alle Bewertungen zu verifizieren."),
(22,"Viele Verbraucher sind sich ihrer Rechte bei verspäteten Lieferungen nicht bewusst."),
(23,"Der Online-Handel hat in den letzten Jahren an Bedeutung verloren."),
],
"Rechtliche Grundlagen des europäischen E-Commerce",
"Verbraucherrechte und Risiken beim Online-Shopping",
"Strategien für erfolgreiche Online-Händler",
"b",
["r","f","f","r","r","r","f","r","f","r","f"],
),

# ── 704 ── Thema: Elektromobilität
(704,
"Stecker statt Tankrüssel: Die Realität der Elektromobilität",
[
"Die Elektromobilität gilt vielen als die Antwort auf die Klimakrise im Verkehrssektor. Staatliche Kaufprämien, Steuervorteile und ambitionierte Zulassungsziele der Europäischen Union haben den Absatz von Elektroautos in den letzten Jahren deutlich angekurbelt. Doch trotz aller Fortschritte hinkt die Realität oft dem Versprechen hinterher. Ladeinfrastruktur, Reichweite und Anschaffungskosten bleiben für viele potenzielle Käufer zentrale Hürden.",
"Das Ladenetz in Deutschland wird zwar kontinuierlich ausgebaut, doch die geografische Verteilung ist nach wie vor ungleichmäßig. Während Städte und Autobahnen gut versorgt sind, klafft auf dem Land noch immer eine erhebliche Lücke. Wer in einem ländlichen Gebiet wohnt und kein eigenes Haus mit Garage und Wallbox besitzt, muss für das Laden seines Fahrzeugs oft weite Wege in Kauf nehmen. Kritiker sprechen von einer drohenden Zweiklassengesellschaft der Mobilität.",
"Die Reichweite der Fahrzeuge verbessert sich von Modell zu Modell, liegt aber bei Alltagsbedingungen – vor allem im Winter – oft deutlich unter den beworbenen Herstellerangaben. Heizung, Klimaanlage und Fahrstil beeinflussen den Energieverbrauch erheblich. Für Pendler mit kurzen Strecken ist dies kein Problem, für Fernreisende mit Wohnanhänger hingegen erfordert jede Fahrt sorgfältige Planung. Das sogenannte Reichweiten-Angst ist zwar psychologisch und nicht immer rational, bleibt aber ein reales Kaufhindernis.",
"Ein weiterer Aspekt ist die Frage nach der ökologischen Bilanz. Elektroautos stoßen im Betrieb zwar kein CO2 aus, doch die Herstellung der Batterien ist energieintensiv und verbraucht seltene Rohstoffe wie Lithium und Kobalt, deren Abbau in Entwicklungsländern oft mit erheblichen sozialen und ökologischen Problemen verbunden ist. Erst wenn der Strom, der das Fahrzeug antreibt, vollständig aus erneuerbaren Quellen stammt, ist die Klimabilanz wirklich positiv. In Deutschland mit seinem noch immer erheblichen Anteil an fossilen Energieträgern im Strommix ist dieser Punkt besonders relevant.",
"Auf der Kostenseite sinken die Preise für Elektroautos langsam, liegen aber immer noch deutlich über denen vergleichbarer Verbrennermodelle. Staatliche Förderungen haben dies bisher teilweise ausgeglichen, werden aber schrittweise reduziert. Langfristig sollen niedrigere Betriebskosten durch günstigere Energiepreise und geringere Wartungsaufwände den höheren Kaufpreis kompensieren. Ob dieser Punkt für den Durchschnittskunden tatsächlich eintritt, hängt stark vom individuellen Fahrprofil ab.",
"Die Automobilindustrie investiert massiv in die Entwicklung neuer Batterietechnologien. Festkörperbatterien gelten als der nächste große Durchbruch: Sie sollen eine deutlich höhere Energiedichte bei geringerem Gewicht bieten und schneller laden. Erste serienreife Modelle werden für Ende des Jahrzehnts erwartet. Wenn diese Versprechen halten, könnte die Elektromobilität tatsächlich zur Massentechnologie werden, die sie heute noch nicht vollständig ist.",
"Insgesamt zeigt sich, dass die Elektromobilität auf dem richtigen Weg ist, aber noch einige technologische und infrastrukturelle Hürden nehmen muss. Eine realistische Betrachtung erfordert, weder Euphorie noch Pessimismus, sondern sachliche Analyse der Chancen und verbleibenden Herausforderungen.",
],
[
(13,"Staatliche Kaufprämien haben den Kauf von Elektroautos in Deutschland deutlich gesteigert."),
(14,"Das Ladenetz in Deutschland ist auf dem Land genauso gut wie in der Stadt."),
(15,"Die tatsächliche Reichweite eines Elektroautos kann im Winter unter dem Herstellerwert liegen."),
(16,"Die Herstellung von Elektroauto-Batterien ist vollständig umweltfreundlich."),
(17,"Lithium und Kobalt werden für die Batterieproduktion benötigt."),
(18,"Elektroautos sind im Kauf aktuell günstiger als vergleichbare Verbrenner."),
(19,"Festkörperbatterien sollen eine höhere Energiedichte als heutige Batterien bieten."),
(20,"In Deutschland stammt der gesamte Strom für Elektroautos aus erneuerbaren Quellen."),
(21,"Elektroautos haben im Betrieb niedrigere Wartungskosten als Verbrenner."),
(22,"Reichweiten-Angst ist ausschließlich ein rationales Problem."),
(23,"Staatliche Förderungen für Elektroautos werden schrittweise reduziert."),
],
"Technologiegeschichte des Elektroantriebs",
"Chancen und Herausforderungen der Elektromobilität heute",
"Kaufratgeber für Elektrofahrzeuge",
"b",
["r","f","r","f","r","f","r","f","r","f","r"],
),

# ── 705 ── Thema: Homeoffice & psychische Gesundheit
(705,
"Zuhause und doch nie weg: Homeoffice und seine Folgen",
[
"Die Coronapandemie hat das Homeoffice in kürzester Zeit vom Ausnahmefall zur Selbstverständlichkeit gemacht. Millionen von Beschäftigten arbeiten seitdem teilweise oder vollständig von zu Hause. Was zunächst als vorübergehende Notlösung galt, hat sich in vielen Branchen dauerhaft etabliert. Arbeitgeber schätzen die höhere Flexibilität und manche Studien zeigen sogar Produktivitätssteigerungen, doch die Auswirkungen auf die psychische Gesundheit der Mitarbeiter sind vielschichtiger, als sie auf den ersten Blick erscheinen.",
"Ein zentrales Problem des Homeoffice ist die fehlende klare Trennung zwischen Arbeit und Privatleben. In einem Unternehmen ist der physische Wechsel zwischen Büro und Wohnung gleichzeitig ein mentaler Übergang: Man kommt aus der Arbeitswelt heraus und betritt die private Sphäre. Zu Hause verschwimmen diese Grenzen. Wer seinen Laptop abends nicht zuklappt, arbeitet im Extremfall bis tief in die Nacht. Der ständige Blick auf Nachrichten und E-Mails verhindert echte Erholung.",
"Hinzu kommt die soziale Isolation. Gerade für Menschen, die in Einzelhaushalten leben, kann das Homeoffice das Gefühl von Einsamkeit dramatisch verstärken. Der spontane Austausch mit Kollegen in der Kaffeepause, das gemeinsame Mittagessen oder das informelle Gespräch auf dem Flur – all das entfällt. Videokonferenzen können menschliche Nähe nur bedingt ersetzen. Psychologen beobachten, dass das Homeoffice besonders für soziale Menschen, die Energie aus dem Kontakt mit anderen schöpfen, eine erhebliche Belastung darstellt.",
"Auf der anderen Seite bietet das Homeoffice für viele Menschen echte Vorteile. Der wegfallende Pendelweg spart Zeit und Nerven. Eltern können flexibler auf die Bedürfnisse ihrer Kinder reagieren. Introvertierte Beschäftigte, die in Großraumbüros unter dem ständigen Lärm leiden, finden zu Hause oft bessere Konzentrationsbedingungen. Die Autonomie über die eigene Arbeitszeit kann das Gefühl von Selbstbestimmung stärken und die allgemeine Arbeitszufriedenheit erhöhen.",
"Arbeitgeber tragen nach Ansicht von Experten Mitverantwortung für das Wohlbefinden ihrer Mitarbeiter im Homeoffice. Virtuelle Team-Rituale, regelmäßige Einzelgespräche mit Führungskräften und klar kommunizierte Erwartungen können helfen, das Gefühl von Zugehörigkeit zu stärken. Unternehmen, die ihren Mitarbeitern zusätzliche psychologische Unterstützungsangebote machen – etwa Coaching oder Zugang zu Apps für mentale Gesundheit – zeigen Verantwortungsbewusstsein.",
"Die Lösung liegt wahrscheinlich nicht im Extrem. Weder vollständiges Homeoffice noch tägliche Präsenzpflicht werden für alle Mitarbeiter optimal sein. Hybridmodelle, bei denen Mitarbeiter selbst entscheiden können, wo sie an welchen Tagen arbeiten, gelten derzeit als das vielversprechendste Konzept. Sie vereinen die Vorteile beider Welten und ermöglichen es Führungskräften, persönliche Bedürfnisse der Mitarbeiter besser zu berücksichtigen.",
"Letztlich ist das Homeoffice ein Spiegel unserer gesellschaftlichen Werte: Wie viel Freiheit wollen wir? Wie viel Kontrolle brauchen wir? Die Antworten darauf werden die Arbeitswelt der nächsten Jahrzehnte entscheidend prägen.",
],
[
(13,"Die Coronapandemie hat das Homeoffice dauerhaft in vielen Branchen verankert."),
(14,"Das Homeoffice erhöht nachweislich immer die Produktivität aller Mitarbeiter."),
(15,"Fehlende soziale Kontakte können im Homeoffice zu Einsamkeitsgefühlen führen."),
(16,"Videokonferenzen sind ein vollständiger Ersatz für persönliche Begegnungen."),
(17,"Introvertierte Menschen profitieren besonders von der Arbeit im Homeoffice."),
(18,"Arbeitgeber haben laut Experten eine Mitverantwortung für das Wohlbefinden ihrer Mitarbeiter."),
(19,"Hybridmodelle gelten als die optimale Lösung für alle Mitarbeiter gleichermaßen."),
(20,"Der wegfallende Pendelweg spart Zeit und wird als Vorteil des Homeoffice gesehen."),
(21,"Unternehmen, die psychologische Unterstützung bieten, handeln unverantwortlich."),
(22,"Einpersonenhaushalte können durch das Homeoffice stärker von Isolation betroffen sein."),
(23,"Das Homeoffice ist in Deutschland inzwischen gesetzlich für alle Berufe vorgeschrieben."),
],
"Psychologische Auswirkungen des Homeoffice auf Arbeitnehmer",
"Produktivitätssteigerung im Homeoffice durch digitale Tools",
"Die Geschichte der Telearbeit in Deutschland",
"a",
["r","f","r","f","r","r","f","r","f","r","f"],
),

]  # END DATA part 1 (701-705)

# ── TEMPLATE ──────────────────────────────────────────────────────────────────
def build_teil3_html(exam_id, title, paragraphs, statements, q24a, q24b, q24c):
    paras = "\n".join(f"    <p>{p}</p>" for p in paragraphs)
    stmts = "\n".join(
        f"    <li style='margin-bottom:14px;'><strong>{n}</strong>&nbsp; {t}</li>"
        for n, t in statements
    )
    return f"""
  <hr style='margin:40px 0;border:0;border-top:2px dashed #ccc;'>
  <h2 style='font-size:1.6rem;font-weight:bold;margin-bottom:5px;'>Leseverstehen, Teil 3</h2>
  <p style='margin-bottom:20px;font-style:italic;'>
    Lesen Sie den folgenden Text und die Aussagen 13–23. Welche der Aussagen sind richtig (r), falsch (f)
    oder gar nicht im Text enthalten (–)? Es gibt jeweils nur eine richtige Lösung. Markieren Sie Ihre Lösungen
    für die Aufgaben 13–23 auf dem Antwortbogen.
  </p>
  <div style='background:#f8f9fa;padding:30px;border:1px solid #dee2e6;border-radius:8px;'>
    <h3 style='text-align:center;margin-top:0;font-size:1.4rem;font-weight:bold;'>{title}</h3>
{paras}
  </div>
  <ul style='list-style:none;padding:0;margin-top:25px;'>
{stmts}
  </ul>
  <p style='margin-top:20px;font-style:italic;'>
    Welche der Überschriften a, b oder c passt am besten zum Text?
    Markieren Sie Ihre Lösung für die Aufgabe 24 auf dem Antwortbogen.
  </p>
  <p style='margin-top:8px;'>
    <strong>24&nbsp; a</strong>&nbsp; {q24a}<br>
    <strong>b</strong>&nbsp; {q24b}<br>
    <strong>c</strong>&nbsp; {q24c}
  </p>
"""

def build_answer_html(exam_id, answers13_23, correct24):
    labels = list(range(13, 24))
    mapped = ", ".join(f"{n}-{a}" for n, a in zip(labels, answers13_23))
    return f"""
<div style='padding:20px;border-left:5px solid #e74c3c;background:#f8f9fa;margin-top:10px;'>
  <h3>📝 Lösungen Teil 3 ({exam_id})</h3>
  <strong>{mapped} | 24-{correct24}</strong>
</div>"""

# ── INJECTION ─────────────────────────────────────────────────────────────────
with open("data/exam.js", "r", encoding="utf-8") as f:
    src = f.read()

for entry in DATA:
    exam_id, title, paragraphs, statements, q24a, q24b, q24c, correct24, ans = entry

    teil3_html  = build_teil3_html(exam_id, title, paragraphs, statements, q24a, q24b, q24c)
    answer_html = build_answer_html(exam_id, ans, correct24)

    # Find the closing tag of the content field for this exam.
    # Pattern: the source-attribution line followed by </div> and the closing backtick of content.
    # We look for the last </div> just before "`,\n    answer:" for this exam id.
    # Strategy: locate "answer: `" after exam block, find the last \`\n right before it.
    pattern = rf"(id:\s*{exam_id},.*?)(`,\n\s*answer:\s*`)(.*?Lösungen Teil 2 \({exam_id}\).*?`\n\s*\}})"
    match = re.search(pattern, src, re.DOTALL)
    if not match:
        print(f"⚠️  Could not find exam {exam_id}!")
        continue

    # Insert Teil 3 html before the closing backtick of content
    old_content_end = match.group(2)  # "`,\n    answer: `"
    new_content_end = teil3_html + old_content_end

    # Insert Teil 3 answers inside the answer block before its closing backtick
    old_answer_block = match.group(3)
    new_answer_block = old_answer_block.replace(
        "\n`\n  }",
        answer_html + "\n`\n  }"
    )

    src = (
        src[: match.start(2)]
        + new_content_end
        + new_answer_block
        + src[match.end(3):]
    )
    print(f"✅  Exam {exam_id} updated.")

with open("data/exam.js", "w", encoding="utf-8") as f:
    f.write(src)

print("\nDone! exam.js saved with Teil 3 for exams 701-705. Now run add_teil3_part2.py")
