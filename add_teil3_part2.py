#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Part 2: Injects Teil 3 into C1 Lesen exams 706-715 in exam.js
"""
import re

DATA = [

# ── 706 ── Thema: Social Media & Wohlbefinden
(706,
"Likes und Leerheit: Soziale Medien und ihr Einfluss auf das Wohlbefinden",
[
"Soziale Medien sind aus dem Alltag vieler Menschen nicht mehr wegzudenken. Plattformen wie Instagram, TikTok und Facebook bieten eine schnelle Möglichkeit, mit Freunden in Kontakt zu bleiben, sich zu informieren und kreativ zu sein. Doch hinter der bunten Oberfläche verbergen sich psychologische Mechanismen, die das Wohlbefinden der Nutzer erheblich belasten können. Die Wissenschaft befasst sich zunehmend mit den langfristigen Auswirkungen des täglichen Medienkonsums.",
"Ein zentrales Problem ist der ständige Vergleich. Auf sozialen Plattformen präsentieren Menschen ausschließlich die besten Momente ihres Lebens: perfekte Urlaubsfotos, makellose Körper, scheinbar unbeschwerte Freizeitgestaltung. Wer seinen tristen Montagmorgen mit dem glamourösen Wochenendleben anderer vergleicht, erlebt schnell ein Gefühl der Unzulänglichkeit. Psychologen nennen diesen Mechanismus den sozialen Vergleichsprozess, und Studien belegen, dass er direkt mit erhöhter Unzufriedenheit und depressiven Verstimmungen korreliert.",
"Hinzu kommt die Dynamik des Belohnungssystems. Jede Benachrichtigung, jedes Like und jeder Kommentar löst im Gehirn eine kleine Dosis Dopamin aus – denselben Botenstoff, der auch bei Glücksspielen oder dem Konsum bestimmter Substanzen ausgeschüttet wird. Die Plattformen sind so gestaltet, dass die Nutzer möglichst lange verweilen: Unendliches Scrollen, variable Belohnungsintervalle und auf den Nutzer zugeschnittene Inhalte sorgen dafür, dass man das Gerät kaum weglegt. Suchtforscher sprechen bereits von einer echten Verhaltensssucht.",
"Besonders betroffen sind Jugendliche und junge Erwachsene, deren Gehirn sich noch in der Entwicklung befindet. Studien aus den USA zeigen, dass hohe Social-Media-Nutzung bei Teenagern mit einem geringeren Selbstwertgefühl, Schlafproblemen und einer höheren Anfälligkeit für Angststörungen verbunden ist. Mädchen scheinen dabei stärker betroffen zu sein als Jungen, was Forscher auf die vergleichsorientierteren Inhalte zurückführen, die weibliche Nutzer häufiger konsumieren.",
"Auf der anderen Seite wäre es falsch, soziale Medien pauschal zu verteufeln. Sie ermöglichen sozialen Anschluss für Menschen, die in isolierten Regionen leben oder aufgrund von körperlichen Einschränkungen kaum Kontakt zur Außenwelt haben. Online-Communitys können ein Gefühl von Zugehörigkeit vermitteln, das im echten Leben fehlt. Politische Mobilisierung, Spendenkampagnen und gesellschaftlicher Aktivismus haben durch soziale Netzwerke eine neue Kraft und Reichweite gewonnen.",
"Experten empfehlen deshalb keinen vollständigen Verzicht, sondern einen bewussten und gesunden Umgang. Feste Bildschirmzeiten, das Ausschalten von Push-Benachrichtigungen und regelmäßige 'Offline-Tage' können helfen, die Kontrolle zurückzugewinnen. Vor allem aber ist Medienkompetenz gefragt: Wer versteht, wie Algorithmen funktionieren und welche Interessen hinter Plattformen stecken, kann deren Inhalte kritischer bewerten.",
"Letztlich liegt die Verantwortung sowohl bei den Einzelnen als auch bei den Plattformbetreibern und dem Gesetzgeber. Strengere Regulierung von Algorithmen, mehr Transparenz über Werbung und ein verpflichtender Medienunterricht in Schulen sind längst überfällig.",
],
[
(13,"Soziale Medien nutzen Dopamin-Mechanismen, um Nutzer länger auf Plattformen zu halten."),
(14,"Alle sozialen Medien sind für das Wohlbefinden der Nutzer schädlich."),
(15,"Jugendliche Mädchen sind laut Studien stärker von negativen Effekten sozialer Medien betroffen als Jungen."),
(16,"Soziale Medien ermöglichen politische Mobilisierung mit größerer Reichweite."),
(17,"Push-Benachrichtigungen sind laut Experten vollständig zu deaktivieren."),
(18,"Suchtforscher vergleichen exzessiven Social-Media-Konsum mit Glücksspielsucht."),
(19,"Soziale Medien sind für Menschen in isolierten Regionen ohne Bedeutung."),
(20,"In Deutschland gibt es einen verpflichtenden Medienunterricht an allen Schulen."),
(21,"Der soziale Vergleichsprozess kann laut Psychologen zu Unzufriedenheit führen."),
(22,"Hohe Social-Media-Nutzung ist bei Teenagern mit Schlafproblemen verbunden."),
(23,"Plattformen sind so gestaltet, dass Nutzer möglichst kurz auf ihnen bleiben."),
],
"Geschichte der sozialen Netzwerke im Internet",
"Soziale Medien: Chancen, Risiken und Handlungsempfehlungen",
"Marketing-Strategien auf Social-Media-Plattformen",
"b",
["r","f","r","r","-","r","f","f","r","r","f"],
),

# ── 707 ── Thema: Demografie & Pflege
(707,
"Grauer Alltag: Die Herausforderungen einer alternden Gesellschaft",
[
"Deutschland wird älter. Laut aktuellen Daten des Statistischen Bundesamtes wird der Anteil der über 65-Jährigen bis 2040 auf über 28 Prozent der Gesamtbevölkerung ansteigen. Was zunächst wie eine abstrakte Zahl wirkt, hat konkrete Folgen: für das Rentensystem, für das Gesundheitswesen, für die Pflege und für das gesellschaftliche Zusammenleben. Die demografische Alterung ist eine der größten strukturellen Herausforderungen, vor denen Deutschland in den kommenden Jahrzehnten steht.",
"Der Pflegebereich steht dabei vor dem drängendsten Problem. Schon heute fehlen in Deutschland zehntausende qualifizierte Pflegekräfte. Da gleichzeitig die Zahl der Pflegebedürftigen rasant wächst, verschärft sich dieser Mangel von Jahr zu Jahr. Die körperlich und emotional anspruchsvolle Arbeit in der Pflege wird schlecht bezahlt, was viele Berufseinsteiger von einem Einstieg in die Branche abhält. Gezielte Lohnerhöhungen, bessere Arbeitsbedingungen und eine stärkere gesellschaftliche Wertschätzung sind dringend erforderlich.",
"Eine mögliche Entlastung bieten ausländische Pflegekräfte. Viele Länder in Mittel- und Osteuropa entsenden Arbeitskräfte nach Deutschland, die Lücken im Pflegesystem füllen. Doch auch diese Lösung birgt Probleme: Sprachbarrieren, fehlende Anerkennung von Berufsabschlüssen und die ethische Frage, ob reiche Länder den ärmeren einfach das Pflegepersonal abwerben dürfen, sind ungelöste Aspekte dieser Praxis. Deutschland muss langfristig mehr in die eigene Ausbildung investieren.",
"Neben der professionellen Pflege leistet die Familie weiterhin den Großteil der Betreuungsarbeit. Millionen von Deutschen pflegen Angehörige zuhause – oft ohne ausreichende finanzielle Unterstützung und professionelle Begleitung. Besonders Frauen sind betroffen, da sie häufiger als Männer Karrierepausen einlegen, um Familienmitglieder zu pflegen. Dies hat direkte Auswirkungen auf ihre Rentenansprüche und ihre Altersarmut. Die gesellschaftliche Unsichtbarkeit dieser Pflegeleistung ist ein strukturelles Gerechtigkeitsproblem.",
"Die Digitalisierung bietet neue Möglichkeiten, Pflegebedürftige länger im eigenen Zuhause zu betreuen. Sensorgestützte Systeme können Stürze erkennen, Vitaldaten überwachen und im Notfall automatisch Hilfe rufen. Telepflege-Apps ermöglichen regelmäßige Videokonsultationen mit Ärzten und Pflegekräften. Doch auch hier gilt: Technik kann menschliche Zuwendung nicht ersetzen – sie kann sie lediglich ergänzen. Gerade demenzkranke Menschen brauchen körperliche Nähe und persönliche Ansprache.",
"Gesamtgesellschaftlich braucht es ein Umdenken. Ältere Menschen sind keine Last, sondern verfügen über wertvolle Erfahrungen und ein enormes ehrenamtliches Potenzial. Intergenerationale Projekte, bei denen Jung und Alt voneinander lernen, können das gesellschaftliche Zusammengehörigkeitsgefühl stärken. Eine Gesellschaft, die mit dem Alter umgehen kann, ist auch insgesamt widerstandsfähiger gegenüber sozialen Herausforderungen.",
"Die Weichen für eine würdevolle und finanzierbare Pflege im Alter müssen jetzt gestellt werden. Wer diese Aufgabe aufschiebt, wird morgen vor einem unlösbaren Problem stehen.",
],
[
(13,"Der Anteil der über 65-Jährigen soll laut Prognosen bis 2040 auf über 28 Prozent steigen."),
(14,"In Deutschland gibt es derzeit genug qualifizierte Pflegekräfte."),
(15,"Frauen sind häufiger als Männer von unbezahlter Pflegearbeit in der Familie betroffen."),
(16,"Digitale Pflegehilfsmittel können menschliche Zuwendung vollständig ersetzen."),
(17,"Ausländische Pflegekräfte lösen alle Probleme des deutschen Pflegesystems."),
(18,"Sensorgestützte Systeme können Stürze erkennen und automatisch Hilfe rufen."),
(19,"Pflegerinnen und Pfleger erhalten in Deutschland hohe Gehälter."),
(20,"Intergenerationale Projekte können das gesellschaftliche Zusammengehörigkeitsgefühl stärken."),
(21,"Demenzkranke Menschen brauchen besonders körperliche Nähe und persönliche Ansprache."),
(22,"Die Familienbetreuung hat Auswirkungen auf die Rentenansprüche der Pflegenden."),
(23,"Deutschland investiert bereits ausreichend in die eigene Pflegeausbildung."),
],
"Digitale Lösungen für die Altenpflege der Zukunft",
"Demografischer Wandel und die Herausforderungen der Pflege",
"Pflegeversicherung im internationalen Vergleich",
"b",
["r","f","r","f","f","r","f","r","r","r","f"],
),

# ── 708 ── Thema: Recycling & Konsum
(708,
"Wegwerfen war gestern: Die Chancen der Kreislaufwirtschaft",
[
"Deutschland gilt international als Vorreiter beim Recycling. Die duale System, bei dem Verpackungen getrennt gesammelt und der Wiederverwertung zugeführt werden, hat seit seiner Einführung in den 1990er Jahren viele Länder weltweit inspiriert. Dennoch zeigt ein genauerer Blick auf die Zahlen, dass trotz aller Mühetrennungseifer noch erhebliche Lücken bestehen. Viel zu oft landen recyclingfähige Materialien im Restmüll, weil Bürger die Sortierregeln nicht kennen oder weil die Systeme zu kompliziert sind.",
"Ein grundlegendes Problem ist, dass Recycling zwar besser als Deponierung ist, aber noch weit entfernt von einer echten Kreislaufwirtschaft. Der Begriff meint ein Wirtschaftsmodell, in dem Produkte von Beginn an so designed werden, dass sie am Ende ihrer Nutzung komplett in neue Materialkreisläufe zurückgeführt werden können. Heute werden in Deutschland rund 50 Prozent der Kunststoffverpackungen tatsächlich recycelt – klingt gut, bedeutet aber, dass die andere Hälfte immer noch thermisch verwertet oder exportiert wird, was nur eine Umschreibung für Verbrennung oder Aufgabe des Problems ist.",
"Die eigentliche Revolution muss daher vor dem Recycling stattfinden: beim Design der Produkte selbst. Wenn Hersteller Produkte aus möglichst wenigen, reinen Materialien fertigen, die leicht zu trennen sind, vereinfacht sich das gesamte Wertstoffkreislauf erheblich. Das Konzept des 'Design for Recycling' gewinnt in der Industrie langsam an Fahrt, wird aber noch zu selten konsequent umgesetzt. Ein Laptop, bei dem Akku, Bildschirm und Gehäuse ohne Spezialwerkzeug in wenigen Minuten getrennt werden können, ist noch die Ausnahme.",
"Auch das Verhalten der Konsumenten spielt eine entscheidende Rolle. Kaufentscheidungen zugunsten langlebiger, reparierbarer Produkte sind ein wirksames Mittel gegen die Wegwerfgesellschaft. Das Recht auf Reparatur, für das die EU seit Jahren kämpft, verpflichtet Hersteller dazu, Ersatzteile und Reparaturanleitungen für einen bestimmten Zeitraum bereitzustellen. In Deutschland boomt der Markt für Reparaturcafés und Second-Hand-Läden, was zeigt, dass ein Umdenken in Teilen der Gesellschaft bereits stattfindet.",
"Auf staatlicher Ebene sind Anreize und Regulierungen nötig, um die Kreislaufwirtschaft zu beschleunigen. Eine Steuer auf Neumaterialien, kombiniert mit niedrigeren Mehrwertsteuersätzen auf Reparaturdienstleistungen, könnte die Ökonomie der Nachhaltigkeit attraktiver machen. Ebenso helfen Pfandsysteme – nicht nur für PET-Flaschen, sondern auch für Elektronikgeräte und Batterien. Was politisch schwierig erscheint, zeigt in Ländern mit entsprechenden Rahmenbedingungen beachtliche Wirkung.",
"Letztendlich ist die Kreislaufwirtschaft nicht nur eine ökologische, sondern auch eine ökonomische Chance. Unternehmen, die ihre Rohstoffversorgung durch zurückgewonnene Materialien sichern, machen sich unabhängiger von volatilen globalen Märkten. Recycelte Materialien können eine verlässlichere Alternative zu Importen aus politisch instabilen Regionen sein.",
"Die Transformation zur echten Kreislaufwirtschaft ist machbar, aber sie erfordert das koordinierte Handeln von Politik, Industrie und Gesellschaft. Jede Kaufentscheidung, jede Produktgestaltung und jede gesetzgeberische Maßnahme zählt.",
],
[
(13,"Das duale System für Verpackungen wurde in den 1990er Jahren eingeführt."),
(14,"In Deutschland werden aktuell 100 Prozent aller Kunststoffverpackungen recycelt."),
(15,"Das Konzept 'Design for Recycling' bedeutet, Produkte von Anfang an recyclinggerecht zu gestalten."),
(16,"Das Recht auf Reparatur zwingt Hersteller, Ersatzteile für eine gewisse Zeit bereitszustellen."),
(17,"Reparaturcafés und Second-Hand-Märkte sind in Deutschland auf dem Rückzug."),
(18,"Eine Steuer auf Neumaterialien könnte nachhaltige Materialien attraktiver machen."),
(19,"Pfandsysteme sind laut Text nur für PET-Flaschen geeignet."),
(20,"Recycelte Materialien können eine Alternative zu importierten Rohstoffen sein."),
(21,"Deutschland exportiert keine recyclingfähigen Materialien ins Ausland."),
(22,"Die Kreislaufwirtschaft bietet sowohl ökologische als auch ökonomische Vorteile."),
(23,"Ein recyclinggerecht designtes Produkt ist bereits heute der Standard in der Elektronikindustrie."),
],
"Recycling-Technologien der Zukunft",
"Vom Recycling zur Kreislaufwirtschaft: Chancen und Notwendigkeit",
"Geschichte des Umweltschutzes in Deutschland",
"b",
["r","f","r","r","f","r","f","r","f","r","f"],
),

# ── 709 ── Thema: Sozialleistungen & Armut
(709,
"Arm trotz Arbeit: Wenn Vollzeitjobs nicht reichen",
[
"Deutschland gilt als eine der stärksten Volkswirtschaften der Welt, doch hinter dieser Fassade wächst ein soziales Problem: Working Poor – Menschen, die trotz Vollzeitarbeit nicht genug verdienen, um ihren Lebensunterhalt angemessen zu bestreiten. Schätzungen zufolge lebten 2023 rund 8 Prozent der Erwerbstätigen in Deutschland in relativer Armut, obwohl sie einer bezahlten Beschäftigung nachgingen. Diese Zahl ist in den vergangenen Jahren gestiegen, vor allem aufgrund der hohen Inflation und steigender Mieten.",
"Ein Hauptgrund für diese Entwicklung ist die Ausbreitung atypischer Beschäftigungsverhältnisse. Zeitarbeit, befristete Verträge, Minijobs und Solo-Selbstständigkeit haben den klassischen Vollzeitjob mit unbefristetem Vertrag und Tariflohn zurückgedrängt. Diese Arbeitsformen bieten oft weniger Schutz, keine betriebliche Altersvorsorge und geringere Krankenversicherungsansprüche. Besonders Frauen, junge Menschen und Geringqualifizierte sind von dieser Prekarisierung des Arbeitsmarktes betroffen.",
"Der gesetzliche Mindestlohn, der in Deutschland seit 2015 gilt, sollte Abhilfe schaffen. Doch Kritiker bezweifeln, ob er auf dem aktuellen Niveau ausreicht, um Armut zu verhindern. Ökonomen sprechen von einem 'armutsfesten Mindestlohn', der bei rund 14 Euro pro Stunde liegen müsste, damit eine Einzelperson davon leben und gleichzeitig Rentenansprüche aufbauen kann. Der aktuelle Wert liegt darunter. Zudem unterlaufen manche Arbeitgeber den Mindestlohn durch unbezahlte Überstunden oder falsche Klassifizierung von Arbeitszeiten.",
"Ein weiteres strukturelles Problem ist die Mietenentwicklung. In Städten wie München, Frankfurt oder Berlin haben sich die Durchschnittsmieten in den vergangenen zehn Jahren zum Teil verdoppelt. Wer im Niedriglohnsektor arbeitet und in einer der Großstädte lebt, gibt oft mehr als die Hälfte seines Nettoeinkommens für Wohnen aus. Wohnkostenzuschüsse wie das Wohngeld greifen zwar, aber der bürokratische Aufwand und die Zugangsbarrieren sind für viele Betroffene zu hoch.",
"Die Folgen von Armut trotz Arbeit sind weitreichend. Gesunde Ernährung, Kinderbetreuung, kulturelle Teilhabe und medizinische Vorsorge werden zum Luxus. Kinder aus armen Familien starten mit deutlich schlechteren Startbedingungen ins Leben, die sich durch alle Bildungsstufen fortpflanzen. Die sogenannte Armutsspirale dreht sich – von einer Generation zur nächsten.",
"Gesellschaftspolitisch ist die Bekämpfung von Erwerbsarmut eine Frage der Verteilungsgerechtigkeit. Neben einem höheren Mindestlohn werden eine stärkere Tarifbindung, der Ausbau bezahlbaren Wohnraums und eine Reform der Sozialleistungen gefordert. Das Bürgergeld, das 2023 das frühere Hartz-IV-System abgelöst hat, ist ein erster Schritt; ob er ausreicht, wird kontrovers diskutiert.",
"Am Ende steht die Frage, welche Gesellschaft wir sein wollen: eine, in der harte Arbeit zu einem würdigen Leben führt, oder eine, in der Menschen trotz Fleiß auf staatliche Hilfe angewiesen bleiben.",
],
[
(13,"Rund 8 Prozent der Erwerbstätigen in Deutschland lebten 2023 in relativer Armut."),
(14,"Zeitarbeit und Minijobs bieten denselben Schutz wie unbefristete Vollzeitstellen."),
(15,"Der gesetzliche Mindestlohn existiert in Deutschland seit 2015."),
(16,"Ökonomen fordern für einen armutsfesten Mindestlohn etwa 14 Euro pro Stunde."),
(17,"Frauen und junge Menschen sind besonders von Prekarisierung betroffen."),
(18,"Alle Arbeitgeber in Deutschland halten den gesetzlichen Mindestlohn vollständig ein."),
(19,"Hohe Mieten in Großstädten verschärfen die Situation von Geringverdienenden."),
(20,"Das Wohngeld ist für alle Berechtigten einfach zu beantragen."),
(21,"Das Bürgergeld hat 2023 das Hartz-IV-System ersetzt."),
(22,"Kinder aus armen Familien haben laut Text schlechtere Bildungschancen."),
(23,"Höhere Steuern für Geringverdiener werden als Lösung für Erwerbsarmut vorgeschlagen."),
],
"Sozialleistungssysteme im europäischen Vergleich",
"Erwerbsarmut: Ursachen, Folgen und mögliche Lösungen",
"Erfolgsgeschichten aus dem deutschen Arbeitsmarkt",
"b",
["r","f","r","r","r","f","r","f","r","r","f"],
),

# ── 710 ── Thema: Deepfakes & Medienkompetenz
(710,
"Sehen und nicht glauben: Die Bedrohung durch Deepfakes",
[
"Ein Video zeigt einen bekannten Poltiker, der eine schockierende Aussage macht. Das Bild ist scharf, der Ton klar, das Gesicht unverkennbar. Und dennoch: Die Szene hat nie stattgefunden. Was vor wenigen Jahren noch Science-Fiction war, ist heute mit kostenloser Software möglich – sogenannte Deepfakes, also KI-generierte Manipulationen von Bild und Ton, die täuschend echte Medieninhalte erzeugen können. Sie gelten als eine der gefährlichsten Entwicklungen im digitalen Raum.",
"Die Technik dahinter, neuronale Netze vom Typ 'Generative Adversarial Network' (GAN), wurde ursprünglich zu wissenschaftlichen Zwecken entwickelt. Dabei trainieren sich zwei KI-Systeme gegenseitig: Eines erzeugt immer bessere Fälschungen, das andere versucht, diese zu entlarven. Das Ergebnis ist eine beängstigende Perfektion. Was einst Dutzende Stunden Expertenwissen erforderte, ist heute mit wenigen Klicks in einer App möglich.",
"Die Einsatzmöglichkeiten sind vielfältig – und reichen vom harmlosen Spaß bis hin zu ernsthafter Kriminalität. Positivbeispiele sind etwa Filmindustrie-Anwendungen, bei denen verstorbene Schauspieler mit Genehmigung ihrer Nachlass digital wiederbelebt werden, oder barrierefreie Übersetzungstools, die Lippen in anderen Sprachen synchronisieren. Die Schattenseiten überwiegen jedoch: Deepfakes werden genutzt, um nicht-konsensuellen Pornoinhalt zu erstellen, politische Desinformation zu verbreiten oder Unternehmenschefs per Audiomanipulation zu betrügen.",
"Für die Demokratie sind Deepfakes besonders gefährlich. In Wahlkampfzeiten könnten gefälschte Videos von Kandidaten innerhalb von Stunden Millionen Menschen erreichen und die öffentliche Meinung manipulieren. Selbst wenn die Fälschung später entlarvt wird, bleibt der erste Eindruck haften. Dieses Phänomen, bekannt als 'Liar's Dividend', bedeutet, dass sogar echte Aufnahmen im Zeitalter der Deepfakes in ihrer Glaubwürdigkeit beschädigt werden – denn nun kann jeder behaupten, ein kompromittierendes Videobeleg sei ein Fake.",
"Gegenmaßnahmen existieren, aber sie hinken der Technologie hinterher. Softwarefirmen entwickeln Erkennungsalgorithmen, die Unregelmäßigkeiten in Augenzwinkern, Hautstruktur oder Lichteinfällen aufspüren. Doch kaum ist eine Erkennungsmethode entwickelt, werden die Deepfakes nochmals verbessert. Auf rechtlicher Ebene haben einige Länder die Verbreitung von Deepfake-Pornos unter Strafe gestellt, doch eine umfassende Regulierung fehlt.",
"Die wichtigste Verteidigung bleibt die Medienkompetenz der Bevölkerung. Wer weiß, dass Deepfakes existieren und wie man sie erkennt – etwa durch einen gezielten Blick auf Übergänge zwischen Gesicht und Hals oder Lichtreflexionen in den Augen – ist besser gewappnet. Schulen und Medienbildungsprogramme spielen dabei eine entscheidende Rolle.",
"Am Ende ist das Vertrauen in Medieninhalte ein gesellschaftliches Gut, das es zu schützen gilt. Wenn niemand mehr weiß, was echt ist, entsteht ein gefährliches Vakuum, das politische Extremisten und Kriminelle füllen werden.",
],
[
(13,"Deepfakes werden mithilfe von Generative Adversarial Networks (GANs) erzeugt."),
(14,"Die Deepfake-Technologie war noch vor wenigen Jahren für die breite Öffentlichkeit unzugänglich."),
(15,"Deepfakes werden ausschließlich für kriminelle Zwecke genutzt."),
(16,"Der 'Liar's Dividend' bedeutet, dass auch echte Videos an Glaubwürdigkeit verlieren."),
(17,"Erkennungsalgorithmen für Deepfakes sind bereits vollständig ausgereift."),
(18,"Einige Länder haben die Verbreitung von Deepfake-Pornos gesetzlich unter Strafe gestellt."),
(19,"In Wahlkampfzeiten können Deepfakes die öffentliche Meinung beeinflussen."),
(20,"Schulen spielen eine wichtige Rolle bei der Vermittlung von Medienkompetenz."),
(21,"Der Blick auf Lichtreflexionen in den Augen kann bei der Erkennung von Deepfakes helfen."),
(22,"Die KI-Systeme hinter Deepfakes wurden ursprünglich für Kriegszwecke entwickelt."),
(23,"Ein gefährliches Informationsvakuum kann entstehen, wenn Medienvertrauen verloren geht."),
],
"KI-generierte Kunst: Kreativität ohne Grenzen",
"Deepfakes: Technologie, Risiken und gesellschaftliche Folgen",
"Cyberkriminalität und ihre strafrechtliche Verfolgung",
"b",
["r","r","f","r","f","r","r","r","r","f","r"],
),

# ── 711 ── Thema: Sharing Economy
(711,
"Teilen statt Besitzen: Die Sharing Economy im Alltagstest",
[
"Airbnb, Uber, Blablacar – Plattformen, die auf dem Prinzip des Teilens basieren, sind aus dem modernen Alltag nicht mehr wegzudenken. Die sogenannte Sharing Economy verspricht eine effizientere Nutzung von Ressourcen, günstigere Angebote für Konsumenten und eine Demokratisierung des Marktzugangs. Gleichzeitig stehen diese Geschäftsmodelle zunehmend in der Kritik: von Gewerkschaften, traditionellen Anbietern und Stadtplanern gleichermaßen.",
"Die Grundidee klingt überzeugend: Ein Zimmer steht leer, also vermietet man es. Ein Auto fährt täglich dieselbe Strecke, also nimmt man Mitfahrer mit. Kapazitäten, die sonst brachliegen, werden aktiviert und allen zugänglich gemacht. Im Idealfall entsteht so eine Win-Win-Situation: Der Anbieter verdient hinzu, der Nutzer spart, und die Umwelt profitiert von einer höheren Auslastung vorhandener Ressourcen. Weniger Autos auf der Straße, weniger leerstehende Gebäude.",
"Die Realität ist jedoch komplizierter. Plattformen wie Airbnb haben in Städten wie Barcelona, Amsterdam oder Berlin dazu beigetragen, den Wohnungsmarkt massiv zu belasten. Wenn Tausende Privatwohnungen dauerhaft als Ferienwohnungen vermietet werden, entzieht das dem regulären Mietmarkt dringend benötigten Wohnraum. Mieten steigen, Anwohner werden verdrängt. Städte reagieren mit Regulierungen: Manche begrenzen die Anzahl der Vermietungstage pro Jahr, andere verlangen spezielle Lizenzen.",
"Ähnliche Spannungen gibt es im Bereich der Plattformarbeit. Fahrer bei Uber, Lieferanten bei Lieferdiensten oder Freiberufler auf Projektplattformen gelten formal als selbstständig, haben aber oft kaum die Freiheit echter Selbstständiger: Algorithmen bestimmen Aufträge, Preise und Bewertungen. Gewerkschaften kämpfen für die Anerkennung dieser Arbeitnehmer als reguläre Beschäftigte mit entsprechenden Schutzrechten. In einigen europäischen Ländern haben Gerichte bereits Plattformarbeitern Arbeitnehmerrechte zugesprochen.",
"Ökologisch betrachtet ist die Bilanz der Sharing Economy ebenfalls gemischt. Während Carsharing in städtischen Gebieten tatsächlich den Autobestand reduzieren kann, zeigen Studien, dass Ridesharing-Dienste wie Uber in Großstädten oft den öffentlichen Nahverkehr verdrängen statt ergänzen. Das Ergebnis: mehr Fahrten, mehr Staus, mehr Emissionen. Die ökologische Versprechen erfüllen sich nur dort, wo die Sharing Economy als Ergänzung und nicht als Ersatz für nachhaltigen Verkehr eingesetzt wird.",
"Trotz aller Kritik bietet die Sharing Economy echte Chancen – wenn sie richtig reguliert wird. Transparente Regeln, faire Besteuerung und ein klares Verhältnis zu bestehenden Arbeitsrechten könnten das Modell nachhaltiger machen. Einige Städte experimentieren mit genossenschaftlichen Plattformmodellen, bei denen die Gewinne nicht an externe Investoren fließen, sondern direkt den Anbietern und der Gemeinschaft zugutekommen.",
"Die Sharing Economy ist kein Selbstzweck. Sie ist ein Werkzeug, das – richtig eingesetzt – zur Lösung gesellschaftlicher Probleme beitragen kann. Falsch reguliert, kann sie genau diese Probleme verschärfen.",
],
[
(13,"Die Sharing Economy basiert auf der Idee, vorhandene Ressourcen besser zu nutzen."),
(14,"Airbnb hat in vielen Städten dazu beigetragen, Wohnraum für Einheimische knapper zu machen."),
(15,"Fahrer bei Uber gelten laut Plattformvertrag als festangestellte Arbeitnehmer."),
(16,"Einige europäische Gerichte haben Plattformarbeitern Arbeitnehmerrechte zugesprochen."),
(17,"Ridesharing-Dienste in Großstädten ersetzen laut Studien oft den öffentlichen Nahverkehr."),
(18,"Genossenschaftliche Plattformmodelle fließen Gewinne an externe Investoren."),
(19,"Carsharing kann in städtischen Gebieten den Autobestand verringern."),
(20,"Die Sharing Economy ist ökologisch immer vorteilhaft."),
(21,"Manche Städte begrenzen die Anzahl der erlaubten Vermietungstage auf Plattformen."),
(22,"Gewerkschaften befürworten die derzeitige Selbstständigkeit von Plattformarbeitern."),
(23,"Die Sharing Economy kann zur Lösung gesellschaftlicher Probleme beitragen, wenn sie reguliert wird."),
],
"Bekannte Sharing-Economy-Plattformen und ihr Geschäftsmodell",
"Sharing Economy: Potenziale, Probleme und Regulierungsbedarf",
"Finanzielle Vorteile des Teilens für Privatpersonen",
"b",
["r","r","f","r","r","f","r","f","r","f","r"],
),

# ── 712 ── Thema: KI in der Diagnostik
(712,
"Algorithmus als Arzt: Künstliche Intelligenz in der medizinischen Diagnostik",
[
"Wenn eine KI Lungenkrebs auf einem Röntgenbild erkennt, das einem erfahrenen Radiologen entgangen wäre, wirft das grundlegende Fragen auf. Kann eine Maschine besser diagnostizieren als ein Mensch? Und wenn ja: Was bedeutet das für die Zukunft des ärztlichen Berufs? Künstliche Intelligenz hält in immer mehr medizinischen Bereichen Einzug und zeigt Leistungen, die vor wenigen Jahren noch undenkbar schienen.",
"Die Stärke der KI liegt in ihrer Fähigkeit, enorme Datenmengen zu verarbeiten und Muster zu erkennen, die für menschliche Augen unsichtbar bleiben. In der Bilddiagnostik etwa wurden KI-Systeme mit Millionen von beschrifteten Röntgenbildern, MRT-Aufnahmen und Hautfotos trainiert. Bei der Erkennung bestimmter Krebsarten, diabetischer Retinopathie oder Lungenentzündung erreichen diese Systeme bereits eine Genauigkeit, die mit der erfahrener Fachärzte vergleichbar ist – in manchen Studien sogar darüber liegt.",
"Doch Genauigkeit allein reicht nicht. Gute medizinische Diagnose erfordert mehr als Mustererkennung: Sie beinhaltet die Einbeziehung der Krankengeschichte, die Kommunikation mit dem Patienten, das Erkennen von Ausnahmen sowie die ethische Verantwortung für eine Entscheidung. All das kann die KI bisher nicht leisten. Sie ist ein mächtiges Unterstützungswerkzeug, aber kein vollständiger Ersatz für den Arzt. Experten sprechen daher von 'Augmented Medicine' – einer Medizin, die durch Technologie verstärkt, aber von Menschen geführt wird.",
"Ein weiteres Problem ist die Erklärbarkeit. Viele KI-Systeme arbeiten als sogenannte 'Black Boxes': Sie liefern ein Ergebnis, aber können nicht erklären, wie sie zu ihm gekommen sind. In der Medizin ist das ein erhebliches Problem. Ein Arzt muss seine Entscheidungen begründen können – gegenüber dem Patienten, gegenüber Kollegen und im Zweifelsfall auch vor Gericht. Deshalb investiert die Forschung in sogenannte 'Explainable AI', also erklärbarer künstlicher Intelligenz, die ihre Schlüsse transparent macht.",
"Datenschutz ist ein weiteres sensibles Thema. KI-Systeme brauchen riesige Datenmengen, um zu trainieren. Im medizinischen Bereich sind das hochsensible Patientendaten. Die europäische Datenschutzgrundverordnung (DSGVO) setzt strenge Grenzen, was die Nutzung solcher Daten betrifft. Internationale Unternehmen, vor allem aus den USA, haben hingegen Zugriff auf weniger restriktive Datenmengen, was ihnen einen Entwicklungsvorsprung verschaffen kann.",
"Trotz aller Herausforderungen ist klar: KI wird die Medizin der Zukunft entscheidend mitgestalten. In ländlichen Gebieten mit Ärztemangel können KI-gestützte Diagnosesysteme die Grundversorgung verbessern. In Entwicklungsländern könnten günstige KI-Geräte die Gesundheitsversorgung revolutionieren.",
"Die Frage ist nicht, ob KI in der Medizin kommen wird. Sie ist bereits da. Die entscheidende Frage ist, wie wir sicherstellen, dass sie dem Wohl aller Patienten dient – unabhängig von Einkommen und Herkunft.",
],
[
(13,"KI-Systeme in der Medizin werden mit großen Mengen beschrifteter Bilddaten trainiert."),
(14,"KI kann in der Diagnostik bereits vollständig den menschlichen Arzt ersetzen."),
(15,"Bei einigen Krebserkrankungen erreicht die KI eine Diagnosegenauigkeit auf Facharztsniveau."),
(16,"'Augmented Medicine' beschreibt eine Medizin, die durch KI vollständig automatisiert wird."),
(17,"Die fehlende Erklärbarkeit von KI-Entscheidungen ist in der Medizin ein Problem."),
(18,"'Explainable AI' arbeitet als vollständige Black Box ohne Transparenz."),
(19,"Die DSGVO schränkt die Nutzung medizinischer Patientendaten für KI-Training ein."),
(20,"In ländlichen Gebieten könnte KI die medizinische Grundversorgung verbessern."),
(21,"US-amerikanische Unternehmen haben möglicherweise einen Entwicklungsvorteil durch weniger strenge Datenschutzregeln."),
(22,"Gute Diagnostik erfordert laut Text nur Mustererkennung."),
(23,"KI in der Medizin könnte in Entwicklungsländern die Gesundheitsversorgung verbessern."),
],
"Geschichte der medizinischen Bildgebung",
"KI in der Medizin: Möglichkeiten, Grenzen und ethische Fragen",
"Arzt-Patienten-Kommunikation im digitalen Zeitalter",
"b",
["r","f","r","f","r","f","r","r","r","f","r"],
),

# ── 713 ── Thema: Homeschooling
(713,
"Zuhause lernen: Chancen und Grenzen des Homeschoolings",
[
"In Deutschland ist Homeschooling verboten – das Schulpflichtgesetz verpflichtet alle Kinder zum Besuch einer staatlichen oder genehmigten Privatschule. In anderen Ländern, etwa den USA, Großbritannien oder der Schweiz, ist Heimunterricht dagegen legal und weit verbreitet. Dort hat die Zahl der Familien, die ihre Kinder zu Hause unterrichten, in den Pandemiejahren massiv zugenommen. Dies hat eine neue Debatte entfacht: Ist Schule wirklich das beste Modell für alle Kinder?",
"Befürworter des Homeschoolings argumentieren, dass der individuelle Unterricht das Tempo und die Interessen des Kindes berücksichtigt, wie es in einer Klasse mit 25 Schülerinnen und Schülern nicht möglich ist. Hochbegabte Kinder können schneller vorankommen, lernbenachteiligte Kinder können sich mehr Zeit nehmen, ohne als 'langsam' stigmatisiert zu werden. Eltern, die selbst gut ausgebildet sind und Zeit haben, sehen Homeschooling als Möglichkeit, eine maßgeschneiderte Bildung zu bieten.",
"Doch die Kritik ist gewichtig. Die wichtigste Institution für die Sozialisation von Kindern ist die Schule. Dort lernen sie nicht nur Mathe und Deutsch, sondern auch, Konflikte zu lösen, in der Gruppe zu arbeiten, Kompromisse zu schließen und Regeln zu respektieren. Kinder, die ausschließlich zu Hause unterrichtet werden, verpassen diese sozialen Lernprozesse. Studien zeigen, dass Homeschooler in Prüfungen oft gut abschneiden, aber in sozialen Situationen Schwierigkeiten haben können.",
"Ein weiteres Gegenargument ist die fehlende Kontrolle. Im schulischen System werden Lehrpläne, Qualität und Kinderschutz durch staatliche Instanzen überwacht. Bei Homeschooling trägt allein die Familie diese Verantwortung. In Ländern ohne strenge Aufsicht besteht die Gefahr, dass Kinder aus religiösen oder ideologischen Gründen bewusst von bestimmten Inhalten ferngehalten werden. Auch ein lückenhafter Bildungsstand ohne externe Kontrolle ist möglich.",
"Andererseits zeigt die Praxis, dass viele Homeschooling-Familien sehr strukturiert vorgehen und sich in Netzwerken organisieren. Gemeinsame Ausflüge, Sportgruppen und regelmäßige Treffen mit anderen Homeschooling-Kindern kompensieren den fehlenden Schulalltag teilweise. In manchen Ländern gibt es zudem Hybridmodelle, bei denen Kinder an einigen Tagen die Schule besuchen und an anderen Tagen zu Hause lernen.",
"In Deutschland bleibt das Verbot vorerst bestehen, doch die Debatte ist lebendiger denn je. Insbesondere neurodivergente Kinder – also Kinder mit Autismus, ADHS oder besonderen Lernbedürfnissen – könnten von flexibleren Bildungsmodellen profitieren. Einige Experten fordern daher zumindest eine Öffnung für Ausnahmegenehmigungen in begründeten Einzelfällen.",
"Bildung ist keine Einheitslösung. Was dem einen Kind hilft, kann dem anderen schaden. Eine pluralistische Gesellschaft sollte im Bereich Bildung auch pluralistische Lösungen zulassen – mit klaren Standards und einer effektiven Aufsicht.",
],
[
(13,"In Deutschland ist Homeschooling gesetzlich erlaubt."),
(14,"Homeschooling ermöglicht einen stärker individualisierten Unterricht als Regelschulen."),
(15,"Studien zeigen, dass Homeschooler häufig schlechte Prüfungsergebnisse erzielen."),
(16,"Ein Risiko des Homeschoolings ist das Fehlen staatlicher Kontrolle über Bildungsinhalte."),
(17,"Viele Homeschooling-Familien organisieren gemeinsame soziale Aktivitäten für ihre Kinder."),
(18,"Homeschooling-Schüler haben laut Studien keine Schwierigkeiten in sozialen Situationen."),
(19,"Neurodivergente Kinder könnten von flexibleren Bildungsmodellen profitieren."),
(20,"In Deutschland gibt es bereits offizielle Ausnahmegenehmigungen für Homeschooling."),
(21,"In der Schule lernen Kinder auch soziale Fähigkeiten wie Konfliktlösung."),
(22,"Im Unterricht zu Hause können langsam lernende Kinder in ihrem eigenen Tempo arbeiten."),
(23,"In den USA ist Homeschooling grundsätzlich verboten."),
],
"Schulsystem-Reformen in Deutschland im 21. Jahrhundert",
"Homeschooling: Möglichkeiten, Risiken und gesellschaftliche Debatte",
"Vergleich internationaler Bildungssysteme",
"b",
["f","r","f","r","r","f","r","f","r","r","f"],
),

# ── 714 ── Thema: Smart City
(714,
"Die vernetzte Stadt: Smart Cities zwischen Vision und Wirklichkeit",
[
"Sensoren an Ampeln, die den Verkehrsfluss in Echtzeit optimieren. Straßenlaternen, die sich automatisch dimmen, wenn keine Person auf dem Bürgersteig ist. Mülltonnen, die per App signalisieren, wenn sie geleert werden müssen. Was nach Science-Fiction klingt, ist in immer mehr Städten weltweit Realität. Der Begriff 'Smart City' beschreibt Städte, die digitale Technologien nutzen, um ihre Infrastruktur effizienter, nachhaltiger und lebenswerter zu gestalten.",
"Vorreiterstädte wie Singapur, Barcelona oder Kopenhagen zeigen, was möglich ist. In Singapur ist das gesamte städtische Straßennetz mit Sensoren vernetzt, die Staudaten liefern und so eine intelligente Verkehrssteuerung ermöglichen. Barcelona setzt auf smarte Bewässerungssysteme in Parks, die den Wasserverbrauch erheblich reduziert haben. Kopenhagen nutzt Daten aus dem Radwegenetz, um Grüne Wellen für Fahrradfahrer zu schalten und sie bevorzugt durch die Stadt zu leiten.",
"Doch Smart Cities sind mehr als technische Spielereien. Im Kern geht es darum, den Ressourcenverbrauch einer Stadt zu senken und gleichzeitig die Lebensqualität der Bewohner zu steigern. Eine gut vernetzte Stadt kann Energie effizienter einsetzen, durch Präventivmaßnahmen auf Basis von Daten Infrastrukturschäden vermeiden und die öffentliche Sicherheit verbessern. Für eine Welt mit wachsenden Städten und knapper werdenden Ressourcen ist das keine Luxus – es ist eine Notwendigkeit.",
"Gleichzeitig bergen Smart Cities erhebliche Risiken. Die Erfassung von Bewegungsdaten, Konsummustern und sozialen Interaktionen im öffentlichen Raum wirft tiefe Fragen nach Privatheit und Überwachung auf. Wer kontrolliert die Daten? Für welche Zwecke werden sie verwendet? Können sie an Dritte verkauft werden? In China hat das Konzept der 'Smart City' in seiner extremsten Ausprägung zum allgegenwärtigen Überwachungsstaat geführt, bei dem Gesichtserkennung im öffentlichen Raum zur Regel geworden ist.",
"In Europa versucht man, diese Spannung durch regulatorische Rahmenbedingungen aufzulösen. Die DSGVO schützt Bürgerdaten vor unkontrollierter Nutzung, und die 'European Data Governance Act' zielt auf faire Datenmärkte ab. Viele europäische Städte betonen deshalb das Konzept der 'Human-Centric Smart City', die Technologie in den Dienst des Menschen stellt – und nicht umgekehrt.",
"Ein weiteres Risiko ist die digitale Kluft. Smart-City-Technologien nutzen vor allem denjenigen, die mit digitalen Geräten umgehen können. Ältere Menschen, sozial Benachteiligte oder Menschen ohne Smartphone drohen, von den Vorteilen ausgeschlossen zu werden. Eine Smart City, die nur für die technikaffine Bourgeoisie funktioniert, verfehlt ihr soziales Versprechen.",
"Am Ende hängt der Erfolg einer Smart City nicht von der Technologie ab, sondern von der Bereitschaft der Stadt und ihrer Bewohner, offen und verantwortungsbewusst mit ihr umzugehen. Technik allein macht keine Stadt smart – es sind die Menschen, die ihr Leben in ihr gestalten.",
],
[
(13,"Singapur nutzt Sensoren im Straßennetz für eine intelligente Verkehrssteuerung."),
(14,"Smart-City-Technologien haben keinerlei Auswirkungen auf den Energieverbrauch."),
(15,"In China wird Gesichtserkennung im öffentlichen Raum flächendeckend eingesetzt."),
(16,"Die DSGVO dient unter anderem dem Schutz von Bürgerdaten in Smart Cities."),
(17,"Das Konzept 'Human-Centric Smart City' stellt Technologie in den Dienst der Bürger."),
(18,"Smart-City-Technologien kommen allen Bevölkerungsgruppen gleichermaßen zugute."),
(19,"Barcelona hat durch smarte Bewässerungssysteme Wasser gespart."),
(20,"Kopenhagen verwendet Daten, um Ampelschaltungen für Radfahrer zu optimieren."),
(21,"Die Erfassung von Bewegungsdaten in Smart Cities wirft Datenschutzfragen auf."),
(22,"In Europa gibt es keine Regulierung für die Nutzung von Smart-City-Daten."),
(23,"Smart Cities sind laut Text in erster Linie ein Luxus für reiche Länder."),
],
"Technologische Grundlagen moderner Städteplanung",
"Smart Cities: Chancen, Risiken und europäische Perspektiven",
"Urbane Architektur im 21. Jahrhundert",
"b",
["r","f","r","r","r","f","r","r","r","f","f"],
),

# ── 715 ── Thema: Lokaljournalismus
(715,
"Die Lücke vor der Haustür: Krise des Lokaljournalismus",
[
"Wer berichtet über den Gemeinderat, wenn die Lokalzeitung schließt? Wer fragt kritisch nach, wenn die Stadt einen umstrittenen Bauprojekt genehmigt? Wer dokumentiert das Leben in der Kleinstadt, wenn kein Reporter mehr vor Ort ist? Der Lokaljournalismus steckt in einer tiefen Krise, und die Folgen für die lokale Demokratie sind gravierend. In den vergangenen zwanzig Jahren haben Hunderte Lokalredaktionen in Deutschland ihre Arbeit eingestellt oder wurden auf ein Minimum reduziert.",
"Die wirtschaftlichen Ursachen sind vielschichtig. Das klassische Geschäftsmodell der Lokalzeitung – Abogebühren plus Anzeigeneinnahmen – funktioniert im digitalen Zeitalter kaum noch. Junge Leserinnen und Leser kaufen keine gedruckten Zeitungen mehr, und lokale Gewerbetreibende schalten ihre Anzeigen lieber auf Google oder Facebook, wo sie ihre Zielgruppe präziser erreichen. Die Einnahmen der Verlage brechen ein, während die Produktionskosten steigen.",
"Als Reaktion setzen viele Verlage auf Zentralisierung und Automatisierung. Statt in jeder Stadt eine eigene Redaktion mit Ortskenntnis zu unterhalten, werden Texte zentral produziert und nur noch lokal angepasst. Automatisch generierte Berichte über Sportergebnisse oder Wetterlagen ersetzen den handgemachten Lokalbericht. Das Ergebnis sind austauschbare Inhalte ohne Tiefe und ohne regionalen Bezug – Lokaljournalismus dem Namen nach, nicht der Substanz nach.",
"Was verloren geht, ist schwer zu messen, aber spürbar. Lokale Korruption bleibt unentdeckt. Bürgerproteste finden keine Öffentlichkeit mehr. Wichtige Entscheidungen in Kommunalparlamenten werden nicht begleitet. Dort, wo kein lokaler Journalismus mehr existiert, sprechen Forscher von 'News Deserts' – Informationswüsten, in denen Bürger keine verlässliche Quelle für lokale Belange mehr haben. Erste Studien deuten darauf hin, dass in solchen Regionen die Wahlbeteiligung sinkt und das Vertrauen in staatliche Institutionen abnimmt.",
"Gegenmodelle entstehen, aber sie sind noch wenige und klein. Lokale Nachrichtenwebsites, finanziert durch Mitgliedsbeiträge oder Spenden, versuchen die Lücken zu füllen. Projekte wie 'Correctiv' oder 'Bonner Generalanzeiger digital' zeigen, dass nutzersupportierter Lokaljournalismus möglich ist. Auch öffentliche Förderung wird diskutiert: In Frankreich und Schweden gibt es bereits direkte staatliche Zuschüsse für Lokalmedien, ohne dass dies die redaktionelle Unabhängigkeit beeinträchtigt.",
"Ob diese Modelle skalierbar sind, bleibt offen. Klar ist: Lokaljournalismus ist kein Luxus, sondern ein demokratisches Grundnahrungsmittel. Er hält die lokale Macht in Schach, gibt Bürgern eine Stimme und stiftet Identität in einer zunehmend globalisierten Welt.",
"Eine Gesellschaft, die bereit ist, für Streamingdienste zu bezahlen, aber nicht für guten Lokaljournalismus, hat die Prioritäten falsch gesetzt. Es liegt auch an den Lesern, diese Infrastruktur der Demokratie zu stützen.",
],
[
(13,"Viele Lokalredaktionen in Deutschland haben in den letzten zwanzig Jahren geschlossen."),
(14,"Das klassische Geschäftsmodell der Lokalzeitung funktioniert im digitalen Zeitalter problemlos."),
(15,"Durch Zentralisierung entstehen laut dem Text qualitativ hochwertigere Lokalartikel."),
(16,"'News Deserts' bezeichnen Regionen ohne verlässliche lokale Nachrichtenquellen."),
(17,"In Regionen ohne Lokaljournalismus sinkt laut ersten Studien die Wahlbeteiligung."),
(18,"Nutzersupportierter Lokaljournalismus ist prinzipiell möglich, wie Praxisbeispiele zeigen."),
(19,"In Frankreich und Schweden gibt es staatliche Förderung für Lokalmedien."),
(20,"Automatisch generierte Berichte können laut Text tiefen und regionalen Bezug ersetzen."),
(21,"Lokaljournalismus deckt laut Text lokale Korruption auf."),
(22,"Die Wahlbeteiligung steigt in den meisten Regionen, in denen der Lokaljournalismus fehlt."),
(23,"Öffentliche Förderung für Lokalmedien schadet laut Beispielen der redaktionellen Unabhängigkeit."),
],
"Medienrecht und Pressefreiheit in Deutschland",
"Krise des Lokaljournalismus: Ursachen, Folgen und Gegenmaßnahmen",
"Erfolgreiche Digital-First-Strategien im Verlagsbereich",
"b",
["r","f","f","r","r","r","r","f","r","f","f"],
),

]  # END DATA 706-715


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


with open("data/exam.js", "r", encoding="utf-8") as f:
    src = f.read()

for entry in DATA:
    exam_id, title, paragraphs, statements, q24a, q24b, q24c, correct24, ans = entry

    teil3_html  = build_teil3_html(exam_id, title, paragraphs, statements, q24a, q24b, q24c)
    answer_html = build_answer_html(exam_id, ans, correct24)

    pattern = rf"(id:\s*{exam_id},.*?)(`,\n\s*answer:\s*`)(.*?Lösungen Teil 2 \({exam_id}\).*?`\n\s*\}})"
    match = re.search(pattern, src, re.DOTALL)
    if not match:
        print(f"WARNING: Could not find exam {exam_id}!")
        continue

    old_content_end = match.group(2)
    new_content_end = teil3_html + old_content_end
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
    print(f"OK: Exam {exam_id} updated.")

with open("data/exam.js", "w", encoding="utf-8") as f:
    f.write(src)

print("\nDone! exam.js saved with Teil 3 for exams 706-715.")
