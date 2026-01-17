const db = {
  vocab: window.vocabData || [],
  grammar: window.grammarData || [],
  reading: window.readingData || [],
  exam: window.examData || [],
};

/* --- TRANSLATIONS --- */
const translations = {
  tr: {
    logoTitle: "DeutschMaster",
    adminBtn: "Admin Paneli",
    start: "▶ Başlat",
    pause: "⏸ Durdur",
    progress: "İlerleme:",
    words: "Kelime",
    vocab: "Flashcards",
    grammar: "Gramer",
    phrases: "Kalıplar",
    reading: "Okuma",
    exam: "Sınavlar",
    verb: "Fiil",
    noun: "İsim",
    adjective: "Sıfat",
    adverb: "Zarf",
    grammarTitle: "Gramer Konuları",
    grammarDesc: "Gramer içerikleri burada listelenecek.",
    phrasesTitle: "Günlük Kalıplar",
    phrasesDesc: "Konuşma kalıpları burada listelenecek.",
    readingTitle: "Okuma Parçaları",
    addWord: "Kelime Ekle",
    addGrammar: "Gramer Ekle",
    addPhrase: "Kalıp Ekle",
    addExam: "Soru Ekle",
    newWord: "Yeni Kelime Ekle",
    newGrammar: "Gramer Konusu Ekle",
    newPhrase: "Kalıp Ekle",
    newExam: "Sınav Sorusu Ekle",
    lblGerman: "Almanca",
    lblTurkish: "Türkçe",
    lblType: "Tür",
    lblLevel: "Seviye",
    lblPerfekt: "Perfekt (haben/sein)",
    lblPresent: "Present Cümle",
    lblPerfektSent: "Perfekt Cümle",
    lblDesc: "Açıklama",
    lblTitle: "Konu Başlığı",
    lblQuestion: "Soru",
    lblOptA: "Seçenek A",
    lblOptB: "Seçenek B",
    lblOptC: "Seçenek C",
    lblOptD: "Seçenek D",
    lblCorrect: "Doğru Cevap (0-3)",
    save: "KAYDET",
    cardHint: "👆 Çevirmek için tıkla",
    btnLearn: "ÖĞRENDİM (+1 Puan)",
    btnLearned: "✔ Öğrenildi",
    welcome: "Hoşgeldin,",
    enterName: "Adınızı girin...",
    lblExamType: "Sınav Türü",
    readingGrammarNote: "Gramer Notu",
    readingNewWords: "Yeni Öğrenilen Kelimeler",
    readingMarkRead: "Okudum",
    readingDone: "Tamamlandı",
  },
  en: {
    logoTitle: "DeutschMaster",
    adminBtn: "Admin Panel",
    start: "▶ Start",
    pause: "⏸ Pause",
    progress: "Progress:",
    words: "Words",
    vocab: "Flashcards",
    grammar: "Grammar",
    phrases: "Phrases",
    reading: "Reading",
    exam: "Exams",
    verb: "Verb",
    noun: "Noun",
    adjective: "Adjective",
    adverb: "Adverb",
    grammarTitle: "Grammar Topics",
    grammarDesc: "Grammar content will be listed here.",
    phrasesTitle: "Daily Phrases",
    phrasesDesc: "Conversation phrases will be listed here.",
    readingTitle: "Reading Passages",
    addWord: "Add Word",
    addGrammar: "Add Grammar",
    addPhrase: "Add Phrase",
    addExam: "Add Question",
    newWord: "Add New Word",
    newGrammar: "Add Grammar Topic",
    newPhrase: "Add Phrase",
    newExam: "Add Exam Question",
    lblGerman: "German",
    lblTurkish: "Turkish",
    lblType: "Type",
    lblLevel: "Level",
    lblPerfekt: "Perfekt (haben/sein)",
    lblPresent: "Present Sent",
    lblPerfektSent: "Perfekt Sent",
    lblDesc: "Description",
    lblTitle: "Topic Title",
    lblQuestion: "Question",
    lblOptA: "Option A",
    lblOptB: "Option B",
    lblOptC: "Option C",
    lblOptD: "Option D",
    lblCorrect: "Correct Ans (0-3)",
    save: "SAVE",
    cardHint: "👆 Click to translate",
    btnLearn: "LEARNED (+1 Point)",
    btnLearned: "✔ Learned",
    welcome: "Welcome,",
    enterName: "Enter your name...",
    lblExamType: "Exam Type",
    readingGrammarNote: "Grammar Note",
    readingNewWords: "New Vocabulary",
    readingMarkRead: "Mark as Read",
    readingDone: "Completed",
  },
  pl: {
    logoTitle: "DeutschMaster",
    adminBtn: "Panel Admina",
    start: "▶ Start",
    pause: "⏸ Pauza",
    progress: "Postęp:",
    words: "Słowa",
    vocab: "Fiszki",
    grammar: "Gramatyka",
    phrases: "Zwroty",
    reading: "Czytanie",
    exam: "Egzaminy",
    verb: "Czasownik",
    noun: "Rzeczownik",
    adjective: "Przymiotnik",
    adverb: "Przysłówek",
    grammarTitle: "Tematy Gramatyki",
    grammarDesc: "Treści gramatyczne będą tutaj.",
    phrasesTitle: "Codzienne Zwroty",
    phrasesDesc: "Zwroty konwersacyjne będą tutaj.",
    readingTitle: "Teksty do czytania",
    addWord: "Dodaj Słowo",
    addGrammar: "Dodaj Gramatykę",
    addPhrase: "Dodaj Zwrot",
    addExam: "Dodaj Pytanie",
    newWord: "Dodaj Nowe Słowo",
    newGrammar: "Dodaj Temat Gramatyki",
    newPhrase: "Dodaj Zwrot",
    newExam: "Dodaj Pytanie",
    lblGerman: "Niemiecki",
    lblTurkish: "Turecki",
    lblType: "Typ",
    lblLevel: "Poziom",
    lblPerfekt: "Perfekt (haben/sein)",
    lblPresent: "Zd. Czas Ter.",
    lblPerfektSent: "Zd. Perfekt",
    lblDesc: "Opis",
    lblTitle: "Tytuł Tematu",
    lblQuestion: "Pytanie",
    lblOptA: "Opcja A",
    lblOptB: "Opcja B",
    lblOptC: "Opcja C",
    lblOptD: "Opcja D",
    lblCorrect: "Prawidłowa (0-3)",
    save: "ZAPISZ",
    cardHint: "👆 Kliknij aby przetłumaczyć",
    btnLearn: "NAUCZONE (+1 Punkt)",
    btnLearned: "✔ Nauczone",
    welcome: "Witaj,",
    enterName: "Wprowadź imię...",
    lblExamType: "Typ Egzaminu",
    readingGrammarNote: "Notatka gramatyczna",
    readingNewWords: "Nowe słowa",
    readingMarkRead: "Przeczytane",
    readingDone: "Ukończono",
  },
  ua: {
    logoTitle: "DeutschMaster",
    adminBtn: "Панель Адміна",
    start: "▶ Старт",
    pause: "⏸ Пауза",
    progress: "Прогрес:",
    words: "Слова",
    vocab: "Флеш-картки",
    grammar: "Граматика",
    phrases: "Фрази",
    reading: "Читання",
    exam: "Іспити",
    verb: "Дієслово",
    noun: "Іменник",
    adjective: "Прикметник",
    adverb: "Прислівник",
    grammarTitle: "Теми Граматики",
    grammarDesc: "Граматичний контент буде тут.",
    phrasesTitle: "Щоденні Фрази",
    phrasesDesc: "Фрази для розмови будуть тут.",
    readingTitle: "Тексти для читання",
    addWord: "Додати Слово",
    addGrammar: "Додати Граматику",
    addPhrase: "Додати Фразу",
    addExam: "Додати Питання",
    newWord: "Додати Нове Слово",
    newGrammar: "Додати Тему Граматики",
    newPhrase: "Додати Фразу",
    newExam: "Додати Питання",
    lblGerman: "Німецька",
    lblTurkish: "Турецька",
    lblType: "Тип",
    lblLevel: "Рівень",
    lblPerfekt: "Perfekt (haben/sein)",
    lblPresent: "Речення Пр.",
    lblPerfektSent: "Речення Perfekt",
    lblDesc: "Опис",
    lblTitle: "Назва Теми",
    lblQuestion: "Питання",
    lblOptA: "Варіант A",
    lblOptB: "Варіант B",
    lblOptC: "Варіант C",
    lblOptD: "Варіант D",
    lblCorrect: "Правильна (0-3)",
    save: "ЗБЕРЕГТИ",
    cardHint: "👆 Натисніть щоб перекласти",
    btnLearn: "ВИВЧЕНО (+1 Бал)",
    btnLearned: "✔ Вивчено",
    welcome: "Вітаємо,",
    enterName: "Введіть ваше ім'я...",
    lblExamType: "Тип Іспиту",
    readingGrammarNote: "Граматична нотатка",
    readingNewWords: "Нові слова",
    readingMarkRead: "Прочитано",
    readingDone: "Завершено",
  },
};

/* --- STATE --- */
let state = {
  lang: "tr",
  user: { name: "", timeSpent: 0, wordsLearned: 0 },
  // timer: { seconds: 0, interval: null, isRunning: false },
  timer: { ref: null, sec: 1500, running: false },
  filters: { type: "verb", level: "A1" },
  grammarFilter: "A1",
  examFilter: "TELC", // Default Exam Type
  examLevel: "A1", // Default Exam Level
  readingFilter: "A1",
  readingIndex: 0,
  learnedIds: [],
};

document.addEventListener("DOMContentLoaded", () => {
  const adminSection = document.getElementById("admin");
  const adminBtn = document.querySelector(".admin-btn");

  // Tüm admin ile ilgili buton ve sekmeleri gizle
  if (adminSection) adminSection.style.display = "none";
  if (adminBtn) adminBtn.style.display = "none";

  // URL ?addData içeriyorsa admin panelini aç
  if (window.location.search.includes("addData")) {
    if (adminSection) adminSection.style.display = "block";
    if (adminBtn) adminBtn.style.display = "inline-block";

    // Diğer tüm sekmeleri kapat, sadece admin aç
    document.querySelectorAll(".section").forEach((s) => {
      if (s.id !== "admin") s.classList.remove("active");
    });
    adminSection.classList.add("active");

    // Admin tablarını varsayılan olarak aç
    const firstAdminTab = document.querySelector(".admin-tab");
    if (firstAdminTab) firstAdminTab.click();
  }

  // Normal render işlemleri
  renderFlashcards();
  updateProgressUI();
  renderGrammar();
  renderExams();
  renderReading();
  toggleWordInputs();
  updateTimerDisplay();
});

/* --- LANGUAGE SWITCH --- */
function setLanguage(lang) {
  state.lang = lang;
  document
    .querySelectorAll(".flag-btn")
    .forEach((b) => b.classList.remove("active"));
  event.target.classList.add("active");

  const texts = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (texts[key]) el.textContent = texts[key];
  });

  document.querySelector('[data-ph="enterName"]').placeholder = texts.enterName;

  renderFlashcards();
  renderGrammar();
  renderExams();
  renderReading();
  updateUser();
}

/* --- TIMER (GERİ SAYIM / POMODORO) --- */

// Süreyi ekrana yazdıran yardımcı fonksiyon
function updateTimerDisplay() {
  if (state.timer.sec < 0) state.timer.sec = 0;

  // Saati hesaplamıyoruz, toplam dakikayı alıyoruz
  const m = Math.floor(state.timer.sec / 60)
    .toString()
    .padStart(2, "0");
  const s = (state.timer.sec % 60).toString().padStart(2, "0");

  // Ekrana sadece Dakika:Saniye basıyoruz
  document.getElementById("timerDisplay").innerText = `${m}:${s}`;
}

function startTimer() {
  // Zaten çalışıyorsa veya süre 0 ise başlatma
  if (state.timer.running || state.timer.sec <= 0) return;

  state.timer.running = true;

  state.timer.ref = setInterval(() => {
    state.timer.sec--; // Geriye say

    updateTimerDisplay(); // Ekrana yeni süreyi yaz

    // Süre bitti mi?
    if (state.timer.sec <= 0) {
      pauseTimer();
      // Süre bitince 00:00 olarak kalsın, uyarı versin
      updateTimerDisplay();
      alert("Süre Doldu! 25 Dakika tamamlandı. Mola zamanı! ☕");
    }
  }, 1000);
}

function pauseTimer() {
  state.timer.running = false;
  clearInterval(state.timer.ref);
}
function calculateStars() {
  const starsFromTime = state.user.timeSpent / 25;
  const starsFromWords = state.learnedIds.length / 50;
  return (starsFromTime + starsFromWords).toFixed(1);
}

function markAsLearned(id, btn) {
  if (!state.learnedIds.includes(id)) {
    state.learnedIds.push(id);
    const texts = translations[state.lang];
    btn.classList.add("learned");
    btn.innerHTML = texts.btnLearned;
    updateProgressUI();
  }
}

function updateProgressUI() {
  const totalWords = state.learnedIds.length;
  const goal = 50;
  const percentage = Math.min((totalWords / goal) * 100, 100);

  document.getElementById("learnedCount").textContent = totalWords;
  document.getElementById("progressBar").style.width = percentage + "%";
  document.getElementById("starsDisplay").textContent =
    "⭐ " + calculateStars();
}

function updateUser() {
  const name = document.getElementById("usernameInput").value;
  state.user.name = name;
  const container = document.getElementById("welcomeContainer");
  const text = document.getElementById("welcomeText");

  if (name) {
    container.style.display = "inline";
    const texts = translations[state.lang];
    text.textContent = texts.welcome + " " + name;
  } else {
    container.style.display = "none";
  }
}

/* --- FLASHCARDS --- */
// function renderFlashcards() {
//   const container = document.getElementById("flashcardsGrid");
//   container.innerHTML = "";
//   const texts = translations[state.lang];

//   const filtered = db.vocab.filter(
//     (w) => w.type === state.filters.type && w.level === state.filters.level,
//   );

//   if (filtered.length === 0) {
//     container.innerHTML =
//       '<div style="grid-column:1/-1; text-align:center;">Bu kriterlere uygun kart yok.</div>';
//     return;
//   }

//   filtered.forEach((w) => {
//     const card = document.createElement("div");
//     card.className = "flashcard";
//     card.onclick = function (e) {
//       if (e.target.tagName !== "BUTTON") this.classList.toggle("flipped");
//     };

//     // Translate Type
//     const typeText = texts[w.type] || w.type;

//     card.innerHTML = `
//                 <div class="flashcard-inner">
//                     <div class="flashcard-front">
//                         <span class="fc-level">${w.level}</span>
//                         <span class="fc-type">${typeText}</span>
//                         <div class="fc-word">${w[state.lang]}</div>
//                         <div class="fc-hint">${texts.cardHint}</div>
//                     </div>

//                     <div class="flashcard-back">
//                         <div class="fc-german">${w.de}</div>

//                         <div class="fc-sentences">
//                             ${w.ex1 ? `<div class="fc-sent-row"><span class="fc-label">Present:</span> ${w.ex1}</div>` : ""}
//                             ${w.ex2 ? `<div class="fc-sent-row"><span class="fc-label">Perfekt (${w.aux || ""}):</span> <span style="color:var(--success)">${w.ex2}</span></div>` : ""}
//                             ${w.syn ? `<div class="fc-sent-row" style="color:#666; font-size:0.8rem; margin-top:5px;"><span class="fc-label">Synonym:</span> ${w.syn}</div>` : ""}
//                         </div>

//                         <button class="btn-learn" onclick="markAsLearned(${w.id}, this)">
//                             <i class="fas fa-check"></i> ${texts.btnLearn}
//                         </button>
//                     </div>
//                 </div>
//             `;
//     container.appendChild(card);
//   });
// }
function renderFlashcards() {
  const container = document.getElementById("flashcardsGrid");
  container.innerHTML = "";
  const texts = translations[state.lang];

  const filtered = db.vocab.filter(
    (w) => w.type === state.filters.type && w.level === state.filters.level,
  );

  if (filtered.length === 0) {
    container.innerHTML =
      '<div style="grid-column:1/-1; text-align:center;">Bu kriterlere uygun kart yok.</div>';
    return;
  }

  filtered.forEach((w) => {
    const card = document.createElement("div");
    card.className = "flashcard";
    card.onclick = function (e) {
      if (e.target.tagName !== "BUTTON") this.classList.toggle("flipped");
    };

    // 1. TÜR ÇEVİRİSİ (Artık "adjective" anahtarı eşleştiği için doğru çalışacak)
    const typeText = texts[w.type] || w.type;

    // 2. KÜÇÜK HARF MANTIĞI
    // Eğer tür "noun" (İsim) değilse, Almancayı küçük harfe çevir.
    let displayGerman = w.de;
    if (w.type !== "noun") {
      displayGerman = w.de.toLowerCase();
    }

    card.innerHTML = `
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <span class="fc-level">${w.level}</span>
                        <span class="fc-type">${typeText}</span>
                        <div class="fc-word">${w[state.lang]}</div>
                        <div class="fc-hint">${texts.cardHint}</div>
                    </div>
                    
                    <div class="flashcard-back">
                        <div class="fc-german">${displayGerman}</div>
                        
                        <div class="fc-sentences">
                            ${w.ex1 ? `<div class="fc-sent-row"><span class="fc-label">Present:</span> ${w.ex1}</div>` : ""}
                            ${w.ex2 ? `<div class="fc-sent-row"><span class="fc-label">Perfekt (${w.aux || ""}):</span> <span style="color:var(--success)">${w.ex2}</span></div>` : ""}
                            ${w.syn ? `<div class="fc-sent-row" style="color:#666; font-size:0.8rem; margin-top:5px;"><span class="fc-label">Synonym:</span> ${w.syn}</div>` : ""}
                        </div>

                        <button class="btn-learn" onclick="markAsLearned(${w.id}, this)">
                            <i class="fas fa-check"></i> ${texts.btnLearn}
                        </button>
                    </div>
                </div>
            `;
    container.appendChild(card);
  });
}

function setFilter(cat, val, btn) {
  state.filters[cat] = val;
  if (cat === "level") {
    btn.classList.remove("active");
    btn.classList.add("active");
  } else {
    const parent = btn.parentElement;
    parent.querySelectorAll(".glass-btn").forEach((b) => {
      b.classList.remove("active", "type-active");
    });
  }

  if (cat === "type") btn.classList.add("type-active");
  else btn.classList.add("active");

  renderFlashcards();
}

/* --- GRAMMAR LOGIC (ACCORDION) --- */
function setGrammarFilter(level, btn) {
  state.grammarFilter = level;
  const parent = btn.parentElement;
  parent
    .querySelectorAll(".glass-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderGrammar();
}

function toggleGrammar(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector(".grammar-toggle-icon");

  // Toggle Open/Close class
  if (content.style.display === "block") {
    content.style.display = "none";
    icon.classList.remove("rotate");
  } else {
    content.style.display = "block";
    icon.classList.add("rotate");
  }
}

function renderGrammar() {
  const container = document.getElementById("grammarList");
  container.innerHTML = "";

  const filtered = db.grammar.filter((g) => g.level === state.grammarFilter);

  if (!filtered.length) {
    container.innerHTML =
      '<div style="text-align:center; padding:20px; color:#999;">Bu seviyede gramer konusu yok.</div>';
    return;
  }

  filtered.forEach((g) => {
    const text = g.content?.[state.lang] || g.content?.tr || "";

    const examplesHTML = g.examples
      ? `<div class="grammar-examples">
          ${g.examples.map((e) => `<div class="example">• ${e}</div>`).join("")}
        </div>`
      : "";

    const item = document.createElement("div");
    item.className = "grammar-item";
    item.innerHTML = `
      <div class="grammar-header" onclick="toggleGrammar(this)">
        <div style="display:flex; align-items:center;">
          <span class="grammar-title">${g.title}</span>
          <span class="grammar-badge">${g.level}</span>
        </div>
        <i class="fas fa-chevron-down grammar-toggle-icon"></i>
      </div>
      <div class="grammar-body">
        <p>${text}</p>
        ${examplesHTML}
      </div>
    `;

    container.appendChild(item);
  });
}

/* --- EXAM LOGIC (UPDATED) --- */
function openExam(type, btn) {
  // This is called from Sidebar
  state.examFilter = type;

  // Activate Main Tab
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("exam").classList.add("active");

  // Sidebar Active State
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));
  btn.classList.add("active");

  renderExams();
}

function setExamLevel(level, btn) {
  state.examLevel = level;
  const parent = btn.parentElement;
  parent
    .querySelectorAll(".glass-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderExams();
}

function renderExams() {
  const container = document.getElementById("examContent");
  container.innerHTML = "";

  // Filter by Exam Type (from sidebar) AND Level (from tab)
  const filtered = db.exam.filter(
    (e) => e.type === state.examFilter && e.level === state.examLevel,
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px; color:#999;">Henüz ${state.examFilter} - ${state.examLevel} için soru eklenmedi.</p>`;
    return;
  }

  filtered.forEach((e) => {
    const div = document.createElement("div");
    div.className = "exam-item";

    let optionsHtml = "";
    e.options.forEach((opt, idx) => {
      const isCorrect = idx === e.correct;
      optionsHtml += `<div class="exam-opt ${isCorrect ? "correct" : ""}">${idx + 1}) ${opt}</div>`;
    });

    div.innerHTML = `<div class="exam-q">${e.q}</div>${optionsHtml}`;
    container.appendChild(div);
  });
}

/* --- READING LOGIC --- */
function setReadingFilter(level, btn) {
  state.readingFilter = level;
  state.readingIndex = 0;
  const parent = btn.parentElement;
  parent
    .querySelectorAll(".glass-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderReading();
}

function setReadingIndex(index) {
  state.readingIndex = index;
  renderReading();
}

// function renderReading() {
//     const container = document.getElementById('readingContainer');
//     container.innerHTML = '';

//     const readings = db.reading.filter(r => r.level === state.readingFilter);

//     if (!readings.length) {
//         container.innerHTML =
//             '<p style="text-align:center; padding:20px; color:#999;">Bu seviyede okuma parçası yok.</p>';
//         return;
//     }

//     if (state.readingIndex >= readings.length) {
//         state.readingIndex = 0;
//     }

//     const item = readings[state.readingIndex];
//     const progress = getReadingProgress();

//     if (!progress[state.readingFilter]) {
//         progress[state.readingFilter] = [];
//     }

//     const texts = translations[state.lang];
//     const grammarText = item.grammar?.[state.lang] || item.grammar?.tr || '';

//     // Index bar
//     let indexHtml = '';
//     readings.forEach((_, i) => {
//         const isRead = progress[state.readingFilter]?.includes(i);
//         indexHtml += `
//             <div class="reading-index-box
//                 ${i === state.readingIndex ? 'active' : ''}
//                 ${isRead ? 'read' : ''}"
//                 onclick="setReadingIndex(${i})">
//                 ${isRead ? '✓' : i + 1}
//             </div>
//         `;
//     });

//     // Kelimeler
//     let vocabHtml = '';
//     item.vocab.forEach(v => {
//         vocabHtml += `
//             <div class="vocab-item-read">
//                 <span class="vocab-de-bold">${v.de}</span> ${v[state.lang]}
//             </div>
//         `;
//     });

//     // ✅ İçeriği renderla, buton burada ekleniyor
//     container.innerHTML = `
//         <div class="reading-index-bar">
//             ${indexHtml}
//         </div>

//         <div class="reading-content">
//             <div style="font-size:1.5rem; color:var(--secondary); margin-bottom:20px; font-weight:bold;">
//                 ${item.title}
//             </div>

//             <div class="passage-text">${item.text}</div>

//             <div class="grammar-box">
//                 <strong>${texts.readingGrammarNote}:</strong> ${grammarText}
//             </div>

//             <h3 style="margin-top:30px; color:var(--secondary);">
//                 ${texts.readingNewWords}
//             </h3>

//             <div class="vocab-list-reading">
//                 ${vocabHtml}
//             </div>

//             <button id="markReadBtn" class="reading-read-btn">
//                 ${progress[state.readingFilter]?.includes(state.readingIndex) ? '✔ Okundu' : 'Mark as Read (+10)'}
//             </button>
//         </div>
//     `;

//     // ✅ Buton event bağlama
//     document.getElementById('markReadBtn').onclick = () => {
//         markReadingAsRead(state.readingFilter, state.readingIndex);
//     };
// }

/* --- READING LOGIC --- */
/* --- READING LOGIC --- */
function renderReading() {
  const container = document.getElementById("readingContainer");
  const readings = db.reading.filter((r) => r.level === state.readingFilter);

  if (!readings.length) {
    container.innerHTML =
      '<p style="text-align:center; padding:20px;">İçerik bulunamadı.</p>';
    return;
  }

  const item = readings[state.readingIndex];
  const progress = getReadingProgress();
  const currentLevelReads = progress[state.readingFilter] || [];
  const isAlreadyRead = currentLevelReads.includes(state.readingIndex);
  const texts = translations[state.lang];

  // Üst Bar: Numaralar (CSS'de belirttiğimiz açık yeşil/koyu yeşil mantığıyla çalışır)
  let indexHtml = readings
    .map((_, i) => {
      const isRead = currentLevelReads.includes(i);
      return `
            <div class="reading-index-box ${i === state.readingIndex ? "active" : ""} ${isRead ? "read" : ""}" 
                 onclick="setReadingIndex(${i})">
                ${i + 1}
            </div>`;
    })
    .join("");

  // Kelime Listesi (strong kullanılarak ve dile göre çekilerek)
  let vocabHtml = "";
  if (item.vocab && item.vocab.length > 0) {
    item.vocab.forEach((v) => {
      vocabHtml += `
                <div class="vocab-item-read">
                    <strong>${v.de}</strong>: ${v[state.lang] || v.tr}
                </div>`;
    });
  }

  // Ana İçerik Render
  container.innerHTML = `
        <div class="reading-index-bar">${indexHtml}</div>
        <div class="reading-content">
            <h2 style="color:var(--secondary); margin-bottom:15px; font-size:1.3rem;">${item.title}</h2>
            <div class="passage-text" style="margin-bottom:20px; line-height:1.6;">${item.text}</div>
            
            <h3 style="font-size:1.1rem; color:var(--secondary); margin-bottom:10px;">${texts.readingNewWords || "Yeni Kelimeler"}</h3>
            <div class="vocab-list-reading" style="margin-bottom:25px;">
                ${vocabHtml}
            </div>
            
            <div class="grammar-box" style="padding:15px; border-left:4px solid var(--secondary); background:#fffcfc; border-radius:4px; margin-bottom:25px; font-size:0.95rem;">
                <div style="margin-bottom:5px; font-weight:bold; color:#333;">
                    <i class="fas fa-info-circle"></i> ${texts.readingGrammarNote}:
                </div>
                <div style="color:#555;">${item.grammar?.[state.lang] || item.grammar?.tr}</div>
            </div>

            <button id="markReadBtn" class="reading-read-btn ${isAlreadyRead ? "is-read" : "not-read"}">
                <i class="fas ${isAlreadyRead ? "fa-check-double" : "fa-check"}"></i>
                <span>${isAlreadyRead ? texts.readingDone || "Tamamlandı" : texts.readingMarkRead || "Okudum"}</span>
            </button>
        </div>
    `;

  document.getElementById("markReadBtn").onclick = () => {
    if (!isAlreadyRead) {
      markReadingAsRead(state.readingFilter, state.readingIndex);
    }
  };
}

function markReadingAsRead(level, index) {
  const progress = getReadingProgress();
  if (!progress[level]) progress[level] = [];

  if (!progress[level].includes(index)) {
    progress[level].push(index);
    saveReadingProgress(progress);

    // Kullanıcıya puan ver ve arayüzü güncelle
    state.user.wordsLearned += 10;
    updateProgressUI();

    // Konfeti efekti veya küçük bir başarı mesajı eklenebilir
    renderReading();
  }
}

// --- baska .. Okundu işlemi baska ---
// function markReadingAsRead(level, index) {
//     const progress = getReadingProgress();

//     if (!progress[level]) progress[level] = [];

//     if (!progress[level].includes(index)) {
//         progress[level].push(index);
//         saveReadingProgress(progress);

//         // Puan ekle
//         state.user.wordsLearned += 10;
//         updateProgressUI();

//         renderReading(); // Butonun durumu güncellensin
//     }
// }

/* --- NAVIGATION --- */
function switchTab(id, el) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));
  el.classList.add("active");

  if (id === "admin") document.querySelector(".admin-tab").click();
}

function toggleAdmin() {
  const adminSec = document.getElementById("admin");
  const isActive = adminSec.classList.contains("active");
  if (!isActive) switchTab("admin", null);
}

/* --- ADMIN TABS & LOGIC --- */
function switchAdminTab(contentId, btn) {
  document
    .querySelectorAll(".admin-content")
    .forEach((c) => c.classList.remove("active"));
  document.getElementById(contentId).classList.add("active");
  document
    .querySelectorAll(".admin-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
}

function toggleWordInputs() {
  const type = document.getElementById("aw_type").value;
  const groupVerb = document.getElementById("group-verb");
  const groupVerbSent = document.getElementById("group-verb-sent");
  const groupSyn = document.getElementById("group-syn");

  if (type === "verb") {
    groupVerb.classList.remove("hidden");
    groupVerbSent.classList.remove("hidden");
    groupSyn.classList.add("hidden");
  } else if (type === "adjective" || type === "adverb") {
    groupVerb.classList.add("hidden");
    groupVerbSent.classList.add("hidden");
    groupSyn.classList.remove("hidden");
  } else {
    groupVerb.classList.add("hidden");
    groupVerbSent.classList.add("hidden");
    groupSyn.classList.add("hidden");
  }
}

function adminAdd(type) {
  let newItem = { id: Date.now() };

  if (type === "word") {
    newItem.de = document.getElementById("aw_de").value;
    newItem.tr = document.getElementById("aw_tr").value;
    newItem.en = document.getElementById("aw_en").value;
    newItem.pl = document.getElementById("aw_pl").value;
    newItem.ua = document.getElementById("aw_ua").value;
    newItem.type = document.getElementById("aw_type").value;
    newItem.level = document.getElementById("aw_level").value;

    if (newItem.type === "verb") {
      newItem.aux = document.getElementById("aw_aux").value;
      newItem.ex2 = document.getElementById("aw_ex2").value;
    } else if (newItem.type === "adjective" || newItem.type === "adverb") {
      newItem.syn = document.getElementById("aw_syn").value;
    }

    newItem.ex1 = document.getElementById("aw_ex1").value;

    if (!newItem.de || !newItem.tr)
      return alert("Lütfen gerekli alanları doldurun.");
    db.vocab.push(newItem);
    renderFlashcards();
  } else if (type === "grammar") {
    newItem.title = document.getElementById("ag_title").value;
    newItem.level = document.getElementById("ag_level").value;
    newItem.content = document.getElementById("ag_content").value;
    if (!newItem.title) return alert("Lütfen başlık girin.");
    db.grammar.push(newItem);
    renderGrammar();
  } else if (type === "phrase") {
    newItem.de = document.getElementById("ap_de").value;
    newItem.tr = document.getElementById("ap_tr").value;
    newItem.type = document.getElementById("ap_type").value;
    db.phrases.push(newItem);
  } else if (type === "exam") {
    newItem.type = document.getElementById("ae_type").value;
    newItem.level = document.getElementById("ae_level")
      ? document.getElementById("ae_level").value
      : "A1"; // Simple default
    newItem.q = document.getElementById("ae_q").value;
    newItem.options = [
      document.getElementById("ae_op1").value,
      document.getElementById("ae_op2").value,
      document.getElementById("ae_op3").value,
      document.getElementById("ae_op4").value,
    ];
    newItem.correct = parseInt(document.getElementById("ae_ans").value);
    db.exam.push(newItem);
    renderExams();
  }

  alert("İçerik başarıyla eklendi!");
  document
    .querySelectorAll(
      ".admin-content.active input, .admin-content.active textarea",
    )
    .forEach((i) => (i.value = ""));
}

function toggleTheme() {
  document.body.setAttribute(
    "data-theme",
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark",
  );
}

function getReadingProgress() {
  return JSON.parse(localStorage.getItem("readingProgress")) || {};
}

function saveReadingProgress(progress) {
  localStorage.setItem("readingProgress", JSON.stringify(progress));
}

function resetReadingProgress(level) {
  const progress = getReadingProgress();
  progress[level] = [];
  saveReadingProgress(progress);
  renderReading();
}

function toggleReadForCurrent() {
  const progress = getReadingProgress();
  if (!progress[state.readingFilter]) progress[state.readingFilter] = [];

  const idx = state.readingIndex;
  const btn = document.getElementById("markReadBtn");

  if (progress[state.readingFilter].includes(idx)) {
    // Geri al
    progress[state.readingFilter] = progress[state.readingFilter].filter(
      (i) => i !== idx,
    );
    btn.textContent = "Mark as Read (+10)";
    state.user.timeSpent = Math.max(0, state.user.timeSpent - 10); // puan azalt
  } else {
    // İşaretle
    progress[state.readingFilter].push(idx);
    btn.textContent = "✔ Okundu";
    state.user.timeSpent += 10; // puan ekle
  }

  saveReadingProgress(progress);
  updateProgressUI();
}
