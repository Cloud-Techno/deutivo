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
    start: "Başlat",
    pause: "Durdur",
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
    lblSubject: "Konu",
    lblTask: "Görev",
    lblTaskDesc: "Görev Tanımı",
    lblAnswerExample: "Cevap (Örnek Mektup)",
    btnShowAnswer: "👁️ Cevabı Göster / Gizle",
    comingSoonBadge: "YAKINDA",
    comingSoonTitle: "Çok Yakında!",
    comingSoonMsg: "Bu sınav bölümü için içerikler hazırlanıyor. Yakında burada olacak! 🚀",
    phrasesNotAvailable: "Henüz bu konu için kalıp eklenmedi.",
    learned: "Öğrenildi",
    points: "Puan",
    footerAbout: "Hakkımda",
    footerContact: "İletişim",
    footerImprint: "Künye",
    footerPrivacy: "Gizlilik",
    aboutTitle: "Hakkımda / Deutivo Hakkında",
    contactTitle: "İletişim",
    imprintTitle: "Künye (Impressum)",
    privacyTitle: "Gizlilik Politikası",
    topics: {
      ALLTAG: "Günlük Yaşam",
      ARBEIT: "İş Dünyası",
      BILDUNG: "Eğitim",
      EINKAUF: "Alışveriş",
      GESUNDHEIT: "Sağlık",
      MEDIEN: "Medya",
      MEINUNG: "Fikir Belirtme",
      REISE: "Seyahat",
      RESTAURANT: "Restoran",
      TANISMA: "Tanışma",
      UMWELT: "Çevre"
    }
  },
  en: {
    logoTitle: "DeutschMaster",
    adminBtn: "Admin Panel",
    start: "Start",
    pause: "Pause",
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
    lblSubject: "Topic",
    lblTask: "Task",
    lblTaskDesc: "Task Description",
    lblAnswerExample: "Answer Example",
    btnShowAnswer: "👁️ Show / Hide Answer",
    comingSoonBadge: "SOON",
    comingSoonTitle: "Coming Soon!",
    comingSoonMsg: "Content for this exam section is being prepared. It will be available soon! 🚀",
    phrasesNotAvailable: "No phrases added for this topic yet.",
    learned: "Learned",
    points: "Points",
    footerAbout: "About Me",
    footerContact: "Contact",
    footerImprint: "Imprint",
    footerPrivacy: "Privacy",
    aboutTitle: "About Me / About Deutivo",
    contactTitle: "Contact Us",
    imprintTitle: "Imprint",
    privacyTitle: "Privacy Policy",
    topics: {
      ALLTAG: "Daily Life",
      ARBEIT: "Work",
      BILDUNG: "Education",
      EINKAUF: "Shopping",
      GESUNDHEIT: "Health",
      MEDIEN: "Media",
      MEINUNG: "Opinion",
      REISE: "Travel",
      RESTAURANT: "Restaurant",
      TANISMA: "Meeting People",
      UMWELT: "Environment"
    }
  },
  pl: {
    logoTitle: "DeutschMaster",
    adminBtn: "Panel Admina",
    start: "Start",
    pause: "Pauza",
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
    lblSubject: "Temat",
    lblTask: "Zadanie",
    lblTaskDesc: "Opis Zadania",
    lblAnswerExample: "Przykład Odpowiedzi",
    btnShowAnswer: "👁️ Pokaż / Ukryj Odpowiedź",
    comingSoonBadge: "WKRÓTCE",
    comingSoonTitle: "Wkrótce!",
    comingSoonMsg: "Treści dla tej sekcji egzaminacyjnej są w przygotowaniu. Wkrótce dostępne! 🚀",
    phrasesNotAvailable: "Nie dodano jeszcze zwrotów dla tego tematu.",
    learned: "Nauczone",
    points: "Punktów",
    footerAbout: "O mnie",
    footerContact: "Kontakt",
    footerImprint: "Nota prawna",
    footerPrivacy: "Prywatność",
    aboutTitle: "O mnie / O Deutivo",
    contactTitle: "Kontakt",
    imprintTitle: "Impressum (Nota prawna)",
    privacyTitle: "Polityka prywatności",
    topics: {
      ALLTAG: "Życie codzienne",
      ARBEIT: "Praca",
      BILDUNG: "Edukacja",
      EINKAUF: "Zakupy",
      GESUNDHEIT: "Zdrowie",
      MEDIEN: "Media",
      MEINUNG: "Opinia",
      REISE: "Podróż",
      RESTAURANT: "Restauracja",
      TANISMA: "Poznawanie ludzi",
      UMWELT: "Środowisko"
    }
  },
  ua: {
    logoTitle: "DeutschMaster",
    adminBtn: "Панель Адміна",
    start: "Старт",
    pause: "Пауза",
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
    lblSubject: "Тема",
    lblTask: "Завдання",
    lblTaskDesc: "Опис Завдання",
    lblAnswerExample: "Приклад Відповіді",
    btnShowAnswer: "👁️ Показати / Приховати Відповідь",
    comingSoonBadge: "НЕЗАБАРОМ",
    comingSoonTitle: "Незабаром!",
    comingSoonMsg: "Вміст для цього розділу іспиту готується. Він буде доступний незабаром! 🚀",
    phrasesNotAvailable: "Для цієї теми ще не додано фраз.",
    learned: "Вивчено",
    points: "Балів",
    footerAbout: "Про мене",
    footerContact: "Контакт",
    footerImprint: "Вихідні дані",
    footerPrivacy: "Конфіденційність",
    aboutTitle: "Про мене / Про Deutivo",
    contactTitle: "Контакти",
    imprintTitle: "Impressum (Вихідні дані)",
    privacyTitle: "Політика конфіденційності",
    topics: {
      ALLTAG: "Повсякденне життя",
      ARBEIT: "Робота",
      BILDUNG: "Освіта",
      EINKAUF: "Покупки",
      GESUNDHEIT: "Здоров'я",
      MEDIEN: "Медіа",
      MEINUNG: "Думка",
      REISE: "Подорож",
      RESTAURANT: "Ресторан",
      TANISMA: "Знайомство",
      UMWELT: "Довкілля"
    }
  },
};

/* --- STATE --- */
let state = {
  lang: "en",
  user: { name: "", timeSpent: 0, wordsLearned: 0 },
  timer: { ref: null, sec: 1500, running: false },
  filters: { type: "verb", level: "A1" },
  grammarFilter: "A1",
  examFilter: "TELC", // Default Exam Type
  examLevel: "A1", // Default Exam Level
  examCategory: "Brief", // "Brief", "lesen", "sprachbaustein"
  readingFilter: "A1",
  readingIndex: 0,
  learnedIds: [],
  totalPoints: 0, // Total points earned
  learnedGrammar: [], // Grammar topics learned
  completedTimers: 0, // Number of 25-min sessions completed
  phraseTopic: "TANISMA", // Default Phrase topic
  selectedWordBankWord: null, // For A2 Part 2
};

/* --- RANKING SYSTEM --- */
const ranks = {
  tr: [
    { min: 0, max: 499, name: "Bronz", icon: "⭐" },
    { min: 500, max: 999, name: "Gümüş", icon: "⭐" },
    { min: 1000, max: 1499, name: "Altın", icon: "⭐" },
    { min: 1500, max: 2499, name: "Platin", icon: "⭐" },
    { min: 2500, max: Infinity, name: "Elmas", icon: "⭐" }
  ],
  en: [
    { min: 0, max: 499, name: "Bronze", icon: "⭐" },
    { min: 500, max: 999, name: "Silver", icon: "⭐" },
    { min: 1000, max: 1499, name: "Gold", icon: "⭐" },
    { min: 1500, max: 2499, name: "Platinum", icon: "⭐" },
    { min: 2500, max: Infinity, name: "Diamond", icon: "⭐" }
  ],
  pl: [
    { min: 0, max: 499, name: "Brąz", icon: "⭐" },
    { min: 500, max: 999, name: "Srebro", icon: "⭐" },
    { min: 1000, max: 1499, name: "Złoto", icon: "⭐" },
    { min: 1500, max: 2499, name: "Platyna", icon: "⭐" },
    { min: 2500, max: Infinity, name: "Diament", icon: "⭐" }
  ],
  ua: [
    { min: 0, max: 499, name: "Бронза", icon: "⭐" },
    { min: 500, max: 999, name: "Срібло", icon: "⭐" },
    { min: 1000, max: 1499, name: "Золото", icon: "⭐" },
    { min: 1500, max: 2499, name: "Платина", icon: "⭐" },
    { min: 2500, max: Infinity, name: "Діамант", icon: "⭐" }
  ]
};

function getRank(points) {
  const rankList = ranks[state.lang] || ranks.tr;
  return rankList.find(r => points >= r.min && points <= r.max) || rankList[0];
}

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

  // Optimize initial render
  renderFlashcards();
  updateProgressUI();

  // Render other sections when browser is idle or after a delay
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
  idleCallback(() => {
    renderGrammar();
    renderExams();
    renderReading();
    toggleWordInputs();
    updateTimerDisplay();
  });
});

/* --- LANGUAGE SWITCH --- */
function setLanguage(lang, btn) {
  state.lang = lang;
  document
    .querySelectorAll(".flag-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const texts = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (texts[key]) el.textContent = texts[key];
  });

  document.querySelector('[data-ph="enterName"]')?.setAttribute('placeholder', texts.enterName);

  // Re-render all content with new language
  renderFlashcards();
  renderGrammar();
  renderExams();
  renderReading();
  renderPhrasesTopics();
  renderPhrases();

  // Update rank display in new language - IMPORTANT!
  updateRankDisplay();
  updateProgressUI();

  // Update user welcome message if exists
  const name = state.user.name;
  if (name) {
    const text = document.getElementById("welcomeText");
    if (text) text.textContent = texts.welcome + " " + name;
  }
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

function toggleTimer() {
  if (state.timer.running) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  // Zaten çalışıyorsa veya süre 0 ise başlatma
  if (state.timer.running || state.timer.sec <= 0) return;

  state.timer.running = true;

  // Update button text
  const btn = document.getElementById("timerToggleBtn");
  const texts = translations[state.lang];
  if (btn) btn.innerHTML = `<span data-i18n="pause">${texts.pause}</span>`;

  state.timer.ref = setInterval(() => {
    state.timer.sec--; // Geriye say

    updateTimerDisplay(); // Ekrana yeni süreyi yaz

    // Süre bitti mi?
    if (state.timer.sec <= 0) {
      pauseTimer();
      updateTimerDisplay();

      if (state.timer.isBreak) {
        setTimeout(() => {
          alert("Mola bitti! Hadi çalışmaya dönelim! 🚀");
          state.timer.isBreak = false;
          state.timer.sec = 1500; // Reset to 25 mins
          updateTimerDisplay();
        }, 10);
      } else {
        // Award 5 points for completing 25 minutes
        state.totalPoints += 5;
        state.completedTimers += 1;
        updateProgressUI();
        alert("Süre Doldu! 25 Dakika tamamlandı. Mola zamanı! ☕\n+5 Puan kazandınız!");
      }
    }
  }, 1000);
}

function startBreak() {
  pauseTimer();
  state.timer.sec = 300; // 5 minutes
  state.timer.isBreak = true;
  updateTimerDisplay();
  startTimer();
}

function pauseTimer() {
  state.timer.running = false;
  clearInterval(state.timer.ref);

  // Update button text
  const btn = document.getElementById("timerToggleBtn");
  const texts = translations[state.lang];
  if (btn) btn.innerHTML = `<span data-i18n="start">${texts.start}</span>`;
}
function calculateStars() {
  const starsFromTime = state.user.timeSpent / 25;
  const starsFromWords = state.learnedIds.length / 50;
  return (starsFromTime + starsFromWords).toFixed(1);
}

function markAsLearned(id, btn) {
  if (!state.learnedIds.includes(id)) {
    state.learnedIds.push(id);
    state.totalPoints += 1; // Add 1 point per word

    const texts = translations[state.lang];
    btn.classList.add("learned");
    btn.innerHTML = texts.btnLearned;

    // Update UI immediately
    updateProgressUI();
  }
}

function updateProgressUI() {
  const totalWords = state.learnedIds.length;

  // Calculate dynamic goal based on current filter
  const totalAvailable = db.vocab.filter(
    (w) => w.type === state.filters.type && w.level === state.filters.level
  ).length;
  const goal = totalAvailable || 50; // Fallback to 50 if no items

  const percentage = Math.min((totalWords / goal) * 100, 100);

  document.getElementById("learnedCount").textContent = totalWords;
  const goalCountEl = document.getElementById("goalCount");
  if (goalCountEl) goalCountEl.textContent = goal;
  document.getElementById("progressBar").style.width = percentage + "%";

  // Update rank and points display
  const rank = getRank(state.totalPoints);
  const starsDisplay = document.getElementById("starsDisplay");
  if (starsDisplay) {
    starsDisplay.innerHTML = `⭐ <span id="rankName">${rank.name}</span> ${state.totalPoints}`;
  }

  // Update logo with fixed branding
  const logoSpan = document.querySelector('.logo span');
  if (logoSpan) {
    logoSpan.textContent = "25min";
  }
}

function updateRankDisplay() {
  const rank = getRank(state.totalPoints);

  // Update logo with fixed branding
  const logoSpan = document.querySelector('.logo span');
  if (logoSpan) {
    logoSpan.textContent = "25min";
  }

  // Update progress info with rank name
  const starsDisplay = document.getElementById("starsDisplay");
  if (starsDisplay) {
    starsDisplay.innerHTML = `⭐ <span id="rankName">${rank.name}</span> ${state.totalPoints}`;
  }
}

function updateUser() {
  const desktopInput = document.getElementById("usernameInput");
  const mobileInput = document.getElementById("usernameInputMobile");

  // Get value from whichever input was changed
  const name = desktopInput?.value || mobileInput?.value || "";

  // Sync both inputs
  if (desktopInput) desktopInput.value = name;
  if (mobileInput) mobileInput.value = name;

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
function renderFlashcards() {
  const container = document.getElementById("flashcardsGrid");
  if (container) {
    container.innerHTML = "";
    container.scrollLeft = 0;
  }
  const texts = translations[state.lang];

  const filtered = db.vocab.filter(
    (w) => w.type === state.filters.type && w.level === state.filters.level,
  );

  if (filtered.length === 0) {
    container.innerHTML =
      '<div style="grid-column:1/-1; text-align:center;">Bu kriterlere uygun kart yok.</div>';
    return;
  }

  const total = filtered.length;

  filtered.forEach((w, index) => {
    const card = document.createElement("div");
    card.className = "flashcard";
    card.onclick = function (e) {
      if (e.target.tagName !== "BUTTON") this.classList.toggle("flipped");
    };

    const typeText = texts[w.type] || w.type;

    // --- KÜÇÜK HARF MANTIĞI ---
    let displayFront = w[state.lang]; // Ön yüzdeki kelime (TR, EN, PL, UA)
    let displayGerman = w.de; // Arka yüzdeki kelime (DE)
    let lowerCaseStyle = ""; // CSS zorlaması

    // Eğer kelime türü 'noun' (İsim) DEĞİLSE her şeyi küçült
    if (w.type !== "noun") {
      displayFront = displayFront.toLowerCase();
      displayGerman = displayGerman.toLowerCase();
      lowerCaseStyle = "text-transform: lowercase !important;";
    }
    // -------------------------

    card.innerHTML = `
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <span class="fc-level" style="left:15px; right:auto; background:#eee; color:#666;">${w.level}</span>
                        <span class="fc-level">${index + 1} / ${total}</span>
                        <span class="fc-type">${typeText}</span>
                        <div class="fc-word" style="${lowerCaseStyle}">${displayFront}</div>
                        <div class="fc-hint">${texts.cardHint}</div>
                    </div>
                    
                    <div class="flashcard-back">
                        <div class="fc-german" style="${lowerCaseStyle}">${displayGerman}</div>
                        
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

  // Update section-specific progress
  updateSectionProgress('vocab', filtered.length);
}

function setFilter(cat, val, btn) {
  state.filters[cat] = val;

  // Find the closest filter row to clear siblings
  const row = btn.closest('.filter-row') || btn.parentElement;
  if (row) {
    row.querySelectorAll(".glass-btn").forEach((b) => {
      b.classList.remove("active", "type-active");
    });
  }

  // Use 'active' class for all types of filters
  btn.classList.add("active");

  // Scroll to top of the page when level changes to show the first card clearly
  if (cat === "level") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

  // Reset scroll to top of the content
  window.scrollTo({ top: 0, behavior: "smooth" });

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

    const isLearned = state.learnedGrammar.includes(g.id);
    const texts = translations[state.lang];
    const learnedClass = isLearned ? 'grammar-learned' : '';
    const learnedBadge = isLearned ? `<span style="color:#28a745; margin-left:10px;">✓ ${texts.learned}</span>` : '';

    const item = document.createElement("div");
    item.className = `grammar-item ${learnedClass}`;
    item.innerHTML = `
      <div class="grammar-header" onclick="toggleGrammar(this)">
        <div style="display:flex; align-items:center;">
          <span class="grammar-title">${g.title}</span>
          <span class="grammar-badge">${g.level}</span>
          ${learnedBadge}
        </div>
        <i class="fas fa-chevron-down grammar-toggle-icon"></i>
      </div>
      <div class="grammar-body">
        <p>${text}</p>
        ${examplesHTML}
        ${!isLearned ? `<button class="btn-learn" onclick="markGrammarLearned(${g.id}, this)" style="margin-top:15px;">
          <i class="fas fa-check"></i> ${texts.btnLearn || (texts.learned + ' (+2 ' + texts.points + ')')}
        </button>` : ''}
      </div>
    `;

    container.appendChild(item);
  });

  // Update section-specific progress
  updateSectionProgress('grammar', filtered.length);
}

function markGrammarLearned(id, btn) {
  if (!state.learnedGrammar.includes(id)) {
    state.learnedGrammar.push(id);
    state.totalPoints += 2; // 2 points per grammar topic
    updateProgressUI();
    renderGrammar(); // Re-render to show learned state
  }
}

/* --- EXAM LOGIC (UPDATED) --- */
function openExam(type, btn) {
  // This is called from Sidebar
  state.examFilter = type;

  // Show/Hide Exam Categories
  document.getElementById("examCategories").style.display = "block";

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

  // Close mobile menu if open (User Request fix)
  if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    }
  }
}

/* --- COMING SOON --- */
function openComingSoon(examName, btn) {
  // Activate Exam section
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('exam').classList.add('active');

  // Hide exam filters / categories
  document.getElementById('examCategories').style.display = 'none';

  // Sidebar active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  btn.classList.add('active');

  // Render coming-soon message
  const texts = translations[state.lang];
  const container = document.getElementById('examContent');
  container.innerHTML = `
    <div style="
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      min-height:340px; text-align:center; padding:40px 20px;
    ">
      <div style="font-size:4rem; margin-bottom:20px;">🚧</div>
      <h2 style="font-size:1.8rem; font-weight:700; color:var(--dark); margin-bottom:12px;">
        ${examName} — ${texts.comingSoonTitle}
      </h2>
      <p style="font-size:1rem; color:#666; max-width:420px; line-height:1.7;">
        ${texts.comingSoonMsg}
      </p>
      <div style="margin-top:30px; display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
        <span style="background:#fff3cd; color:#856404; border:1px solid #ffc107; border-radius:999px; padding:6px 16px; font-size:0.85rem; font-weight:600;">
          ⏳ ${examName}
        </span>
      </div>
    </div>
  `;

  // Update `data-i18n='comingSoonBadge'` spans on re-language switch
  // (handled by applyTranslations which uses data-i18n)

  // Close mobile menu
  if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    }
  }
}

function renderSprachbausteinSection(filtered, container) {
  if (filtered.length === 0) {
    container.innerHTML = `<div style='text-align:center; padding:20px; color:#999;'>Bu seviye için Sprachbausteine bulunamadı.</div>`;
    return;
  }

  const currentItem = filtered[currentExamReadingIndex] || filtered[0];
  const isB2 = currentItem.level === 'B2';
  const isC1 = currentItem.level === 'C1';


  // Navigation - Uniform Design (circles)
  let navHTML = `<div class="reading-nav-grid">`;
  filtered.forEach((_, idx) => {
    const activeClass = idx === currentExamReadingIndex ? 'active' : '';
    navHTML += `<button class="reading-nav-btn ${activeClass}" onclick="setExamReadingIndex(${idx})">${idx + 1}</button>`;
  });
  navHTML += `</div>`;

  let contentHTML = `<div style="font-family: Arial, sans-serif; max-width: 900px; margin: auto; color: #333; line-height: 1.6;">`;

  // Helper to render a part (Teil 1 or Teil 2)
  const renderPart = (partData, subtype) => {
    const isTeil2 = subtype === 'part2';
    let headerTitle = isTeil2 ? "Sprachbausteine Teil 2" : "Sprachbausteine Teil 1";
    let headerDesc = isTeil2 ?
      "Lesen Sie den Text und schließen Sie die Lücken 31–40. Benutzen Sie die Wörter a–o. Jedes Wort passt nur einmal." :
      "Lesen Sie den Text und schließen Sie die Lücken 21–30. Welche Lösung (a, b oder c) ist jeweils richtig?";

    let partHTML = `
      <div class="sprachbaustein-part" style="margin-bottom:60px; background:#fff; padding:20px; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid #f0f0f0;">
        <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 5px; color:var(--secondary);">${headerTitle}</h2>
        <p style="margin-bottom: 25px; font-style: italic; color:#666;">${headerDesc}</p>
    `;

    partData.texts.forEach((textObj) => {
      let textWithGaps = textObj.content;
      textObj.gapIds.forEach(num => {
        if (isTeil2) {
          textWithGaps = textWithGaps.replace(`___${num}___`, `<span id="gap-${num}" class="gap-clickable" onclick="selectWordBankGap(${num}, this)">${num}</span>`);
        } else {
          textWithGaps = textWithGaps.replace(`___${num}___`, `<span style="display:inline-block; border-bottom:2px solid var(--secondary); min-width:35px; text-align:center; font-weight:bold; margin:0 5px; color:var(--secondary);">${num}</span>`);
        }
      });

      let emailHeader = "";
      if (!isTeil2 && (partData.cc || partData.betreff)) {
        emailHeader = `
          <div style="background:#f9f9f9; border-bottom:1px solid #eee; padding:20px; margin-bottom:0; font-family:Arial,sans-serif; font-size:0.95rem; border-radius:8px 8px 0 0;">
            <div style="display:grid; grid-template-columns: 100px 1fr; gap:10px; margin-bottom:10px;">
              <div style="color:#888; font-weight:bold;">CC:</div>
              <div style="background:#fff; border:1px solid #ddd; min-height:24px; padding:4px 12px; border-radius:4px;">${partData.cc || ""}</div>
            </div>
            <div style="display:grid; grid-template-columns: 100px 1fr; gap:10px;">
              <div style="color:#888; font-weight:bold;">Betreff:</div>
              <div style="background:#fff; border:1px solid #ddd; min-height:24px; padding:4px 12px; border-radius:4px;">${partData.betreff || ""}</div>
            </div>
          </div>
        `;
      }

      partHTML += `
        <div style="background: #fdfdfd; padding: 0; border: 1px solid #eee; margin-bottom: 30px; position:relative; border-radius:8px; overflow:hidden;">
          ${emailHeader}
          <div style="padding: 35px; white-space: pre-wrap; font-size: 1.15rem; color:#2c3e50; line-height:1.8;">${textWithGaps}</div>
        </div>
      `;

      if (isTeil2) {
        partHTML += `<div class="word-bank-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap:12px; margin-top:20px;">`;
        Object.entries(partData.wordBank).forEach(([key, val]) => {
          partHTML += `
            <div class="word-bank-item" id="wb-${key}" onclick="selectWordBankWord('${key}', this)" 
                 style="padding:10px; border:1px solid #eee; border-radius:8px; cursor:pointer; background:#fff; transition:all 0.2s;">
              <strong style="color:var(--secondary)">${key})</strong> ${val}
            </div>
          `;
        });
        partHTML += `</div>`;
      } else {
        partHTML += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-top: 30px;">`;
        textObj.gapIds.forEach(num => {
          const q = partData.questions.find(q => q.num === num);
          if (q) {
            let optsHTML = "";
            const options = isC1 ? ['a', 'b', 'c', 'd'] : ['a', 'b', 'c'];
            options.forEach(optKey => {
              const isCorrect = q.correct === optKey;
              optsHTML += `<button class="exam-opt" style="margin:2px 0; padding:8px 12px; text-align:left; width:100%; border-radius:6px; border:1px solid #eee; cursor:pointer;" onclick="checkAnswer(this, ${isCorrect})"><strong>${optKey})</strong> ${q[optKey]}</button>`;
            });
            partHTML += `
              <div style="display: flex; flex-direction: column; gap: 8px; padding:15px; border:1px solid #f0f0f0; border-radius:10px; background:#fafafa;">
                <strong style="font-size: 1.2rem; color:var(--secondary);">${num}</strong>
                <div style="display: flex; flex-direction: column; gap: 4px;">${optsHTML}</div>
              </div>
            `;
          }
        });
        partHTML += `</div>`;
      }
    });
    partHTML += `</div>`;
    return partHTML;
  };

  if (isB2 && currentItem.part1) {
    contentHTML += `<h1 style="text-align:center; margin-bottom:40px; color:#333; font-size:1.8rem;">${currentItem.title}</h1>`;
    contentHTML += renderPart(currentItem.part1, 'part1');
    contentHTML += renderPart(currentItem.part2, 'part2');
  } else {
    // --- Fallback for A1/A2/B1 ---
    const isA2 = currentItem.level === 'A2';
    const isB1 = currentItem.level === 'B1';
    const isC1 = currentItem.level === 'C1';
    const isAdvanced = isA2 || isB1 || isB2 || isC1;
    const isPart2 = currentItem.subtype === 'part2';

    let headerTitle = isAdvanced ? (isPart2 ? "Sprachbausteine Teil 2" : "Sprachbausteine Teil 1") : "1 Sprachbausteine";
    let headerDesc = isAdvanced ?
      (isPart2 ? "Lesen Sie den Text und schließen Sie die Lücken 31–40. Benutzen Sie die Wörter a–o. Jedes Wort passt nur einmal." :
        (isC1 ? "Lesen Sie den Text und schließen Sie die Lücken 25–46. Welche Lösung (a, b, c oder d) ist jeweils richtig?" :
          "Lesen Sie den Text und schließen Sie die Lücken 21–30. Welche Lösung (a, b oder c) ist jeweils richtig?")) :
      "Lesen Sie den Text und kreuzen Sie die richtige Lösung (a oder b) auf dem Antwortbogen an.";

    contentHTML += `
       <h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 5px;">${headerTitle}</h2>
       <p style="margin-bottom: 20px; font-style: italic;">${headerDesc}</p>
    `;

    currentItem.texts.forEach((textObj, tIdx) => {
      let textWithGaps = textObj.content;
      textObj.gapIds.forEach(num => {
        if (isPart2) {
          textWithGaps = textWithGaps.replace(`___${num}___`, `<span id="gap-${num}" class="gap-clickable" onclick="selectWordBankGap(${num}, this)">${num}</span>`);
        } else {
          textWithGaps = textWithGaps.replace(`___${num}___`, `<span style="display:inline-block; border-bottom:1px solid #333; min-width:30px; text-align:center; font-weight:bold; margin:0 5px; color:#c0392b;">${num}</span>`);
        }
      });

      let emailHeader = "";
      if (isB2 && !isPart2 && (currentItem.cc || currentItem.betreff)) {
        emailHeader = `<div style="background:#fff; border-bottom:1px solid #ccc; padding:15px; margin-bottom:0; font-family:Arial,sans-serif; font-size:0.9rem;"><div style="display:grid; grid-template-columns: 80px 1fr; gap:10px; margin-bottom:8px;"><div style="color:#666; border-right:1px solid #eee;">CC:</div><div style="background:#fcfcfc; border:1px solid #eee; min-height:20px; padding:2px 8px;">${currentItem.cc || ""}</div></div><div style="display:grid; grid-template-columns: 80px 1fr; gap:10px;"><div style="color:#666; border-right:1px solid #eee;">Betreff:</div><div style="background:#fcfcfc; border:1px solid #eee; min-height:20px; padding:2px 8px;">${currentItem.betreff || ""}</div></div></div>`;
      }

      contentHTML += `
        <div style="background: ${isAdvanced ? '#f0f0f0' : '#e0e0e0'}; padding: 0; border: 1px solid #999; margin-bottom: 30px; position:relative; border-radius:4px; overflow:hidden;">
          ${emailHeader}
          <div style="padding: 30px; white-space: pre-wrap; font-size: 1.1rem; color:#1a1a1a;">${textWithGaps}</div>
        </div>
      `;

      if (isPart2) {
        contentHTML += `<div class="word-bank-grid">`;
        Object.entries(currentItem.wordBank).forEach(([key, val]) => {
          contentHTML += `<div class="word-bank-item" id="wb-${key}" onclick="selectWordBankWord('${key}', this)"><strong style="color:var(--secondary)">${key}</strong> ${val}</div>`;
        });
        contentHTML += `</div>`;
      } else {
        const columns = isC1 ? 3 : (isAdvanced ? 4 : 2);
        contentHTML += `<div style="display: grid; grid-template-columns: repeat(${columns}, 1fr); gap: 20px; margin-bottom: 40px;">`;
        textObj.gapIds.forEach(num => {
          const q = currentItem.questions.find(q => q.num === num);
          if (q) {
            const options = isC1 ? ['a', 'b', 'c', 'd'] : (isAdvanced ? ['a', 'b', 'c'] : ['a', 'b']);
            let optsHTML = "";
            options.forEach(optKey => {
              const isCorrect = q.correct === optKey;
              optsHTML += `<button class="exam-opt" style="margin:2px 0; padding:8px 12px; text-align:left; width:100%; border-radius:6px; border:1px solid #eee; cursor:pointer;" onclick="checkAnswer(this, ${isCorrect})"><strong>${optKey})</strong> ${q[optKey]}</button>`;
            });
            contentHTML += `
              <div style="display: flex; flex-direction: column; gap: 8px; padding:15px; border:1px solid #f0f0f0; border-radius:10px; background:#fafafa;">
                <strong style="font-size: 1.2rem; color:var(--secondary);">${num}</strong>
                <div style="display: flex; flex-direction: column; gap: 4px;">${optsHTML}</div>
              </div>
            `;
          }
        });
        contentHTML += `</div>`;
      }
    });
  }

  contentHTML += `</div>`;
  container.innerHTML = navHTML + contentHTML;
}


window.selectWordBankGap = function (num, btn) {
  // Check if we have a selected word
  if (state.selectedWordBankWord) {
    const currentItem = db.exam.filter(e => e.level === state.examLevel && e.category === 'sprachbaustein')[currentExamReadingIndex];
    if (!currentItem) return;

    // Handle nested part2 for B2
    const questions = (currentItem.level === 'B2' && currentItem.part2) ? currentItem.part2.questions : (currentItem.questions || []);
    const wordBank = (currentItem.level === 'B2' && currentItem.part2) ? currentItem.part2.wordBank : (currentItem.wordBank || {});

    const q = questions.find(q => q.num === num);
    if (q) {
      const isCorrect = q.correct === state.selectedWordBankWord;
      const wordText = wordBank[state.selectedWordBankWord];

      if (isCorrect) {
        btn.innerHTML = wordText;
        btn.classList.add('filled');
        btn.classList.remove('active-gap');
        // Success sound or feedback? 
        state.totalPoints += 5;
        updateProgressUI();

        // Deselect word
        state.selectedWordBankWord = null;
        document.querySelectorAll('.word-bank-item').forEach(i => i.classList.remove('selected'));
      } else {
        btn.classList.add('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 1000);
        state.totalPoints = Math.max(0, state.totalPoints - 2);
        updateProgressUI();
      }
    }
  } else {
    // Just highlight gap
    document.querySelectorAll('.gap-clickable').forEach(g => g.classList.remove('active-gap'));
    btn.classList.add('active-gap');
  }
};

window.selectWordBankWord = function (key, btn) {
  state.selectedWordBankWord = key;
  document.querySelectorAll('.word-bank-item').forEach(i => i.classList.remove('selected'));
  btn.classList.add('selected');
};


function setExamReadingIndex(idx) {
  currentExamReadingIndex = idx;
  renderExams();
}

function setExamLevel(level, btn) {
  state.examLevel = level;
  currentExamReadingIndex = 0; // Reset index when level changes
  const parent = btn.parentElement;
  parent
    .querySelectorAll(".glass-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  // Reset scroll position
  window.scrollTo({ top: 0, behavior: "smooth" });

  renderExams();
}

function setExamCategory(cat, btn) {
  state.examCategory = cat;
  currentExamReadingIndex = 0; // Reset index when category changes
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

  // Filter by Exam Type (from sidebar) AND Level (from tab) AND Category
  const filtered = db.exam.filter(
    (e) => {
      // If Exam Type is not selected/default, ignore type filter or handle accordingly.
      // But currently state.examFilter defaults to "TELC".
      // Users might want to see Briefs regardless of Exam Type (TELC/Goethe etc)
      // or we should assign types to Briefs.
      // For now, let's assume we match Type.
      // If category is 'Brief', show it regardless of the Exam Type filter (TELC/Goethe/etc)
      // If category is 'Brief', show it regardless of the Exam Type filter (TELC/Goethe/etc)
      // to ensure users see writing tasks in all tabs.
      const isBrief = (e.category === 'Brief' || e.category === 'mektup');
      const isReading = (e.category === 'Lesen' || e.category === 'lesen');
      // If we are in Reading mode, bypass Type check if needed, but currently Type is set to TELC in data. 
      // Actually we want reading to show up if the user SELECTED reading category.
      const matchesType = (isBrief || (isReading && state.examCategory === 'Lesen')) ? true : e.type === state.examFilter;

      const matchesLevel = e.level === state.examLevel;
      // If category is 'all', matches everything, otherwise check exact match or if category is undefined (legacy data support)
      const matchesCategory = state.examCategory === 'all' || e.category === state.examCategory;

      // Special case: If viewing 'Brief', maybe ignore Type if briefs are generic? 
      // User said "Brief bölümü için...", implies a separate section or category logic.
      // But the current UI filters by Type AND Level AND Category.
      // I will ensure the new Brief items have the correct Type (or I'll add logic here to be more lenient).
      // Let's stick to the filter logic: matchesType && matchesLevel && matchesCategory
      return matchesType && matchesLevel && matchesCategory;
    }
  );

  // CHECK FOR READING SECTION
  if (state.examCategory === 'Lesen' || state.examCategory === 'lesen') {
    renderReadingSection(filtered, container);
    return;
  }

  // CHECK FOR SPRACHBAUSTEINE
  if (state.examCategory === 'sprachbaustein') {
    renderSprachbausteinSection(filtered, container);
    return;
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px; color:#999;">Henüz ${state.examFilter} - ${state.examLevel} (${state.examCategory}) için soru eklenmedi.</p>`;
    return;
  }

  filtered.forEach((e) => {
    const div = document.createElement("div");
    div.className = "exam-item";

    const catBadge = e.category ? `<span style="font-size:0.7rem; background:var(--light); color:var(--dark); padding:2px 6px; border-radius:4px; margin-right:5px; text-transform:uppercase;">${e.category}</span>` : "";

    // --- BRIEF (WRITING) RENDER LOGIC ---
    // --- BRIEF (WRITING) RENDER LOGIC ---
    if (e.category === 'Brief' || e.category === 'mektup') {
      const texts = translations[state.lang];

      let htmlContent = "";

      // NEW DATA FORMAT CHECK (Title, Task, Answer fields)
      if (e.task && e.title) {
        htmlContent = `
               <div class="brief-container">
                   <div>
                       <div class="brief-header">${texts.lblSubject || "Subject"}: ${e.title}</div>
                   </div>
                   
                   <div>
                       <span class="brief-label">${texts.lblTaskDesc || "Task"}:</span>
                       <div class="brief-task-box">${e.task}</div>
                   </div>

                   <div class="brief-answer-trigger">
                       <button class="glass-btn small" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                           ${texts.btnShowAnswer}
                       </button>
                       <div class="brief-answer-box">
                           <span class="brief-label" style="margin-bottom:10px;">${texts.lblAnswerExample || "Answer"}:</span>
                           ${e.answer}
                       </div>
                   </div>
               </div>
           `;
      }
      // FALLBACK TO LEGACY (HTML in q)
      else {
        let textContent = e.q || "";
        htmlContent = `<div class="exam-q" style="white-space: pre-wrap;">${catBadge} ${textContent}</div>`;
        if (e.answer) {
          htmlContent += `
               <div style="margin-top:15px;">
                  <button class="glass-btn small" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'" style="font-size:0.8rem; padding: 5px 10px;">
                      ${texts.btnShowAnswer || "Show Answer"}
                  </button>
                  <div class="brief-answer-box" style="display:none;">${e.answer}</div>
               </div>
               `;
        }
      }

      div.innerHTML = htmlContent;
      container.appendChild(div);
      return;
    }

    // --- MULTIPLE CHOICE RENDER LOGIC ---
    let optionsHtml = "";
    if (e.options && Array.isArray(e.options)) {
      e.options.forEach((opt, idx) => {
        const isCorrect = idx === e.correct;
        // In a real exam app, we wouldn't show 'correct' class immediately needed logic to click and check.
        // But based on previous code, it seems static or simple. 
        // Previous code: class="exam-opt ${isCorrect ? "correct" : ""}" -> showed answer immediately?
        // Wait, the previous code showed the correct answer immediately by class?
        // "isCorrect ? 'correct' : ''"
        // Let's keep it simple or interactive. 
        // Interactive: Click to check.
        optionsHtml += `<button class="exam-opt" onclick="checkAnswer(this, ${isCorrect})">${idx + 1}) ${opt}</button>`;
      });
    }

    div.innerHTML = `<div class="exam-q">${catBadge} ${e.q}</div><div class="exam-options">${optionsHtml}</div>`;
    container.appendChild(div);
  });
}

// Helper to check answer for MC items
window.checkAnswer = function (btn, isCorrect) {
  // Clear siblings' classes if we want only one answer highlighted (optional, but good for multiple clicks)
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll('.exam-opt').forEach(opt => opt.classList.remove('correct', 'wrong'));
  }

  if (isCorrect) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
  }
};

/* --- READING LOGIC --- */
function setReadingFilter(level, btn) {
  state.readingFilter = level;
  state.readingIndex = 0;
  const parent = btn.parentElement;
  parent
    .querySelectorAll(".glass-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  // Reset scroll position
  window.scrollTo({ top: 0, behavior: "smooth" });

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

  const targetSection = document.getElementById(id);
  if (targetSection) targetSection.classList.add("active");

  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));

  // Only add active class if it's a sidebar nav item
  if (el && el.classList.contains("nav-item")) {
    el.classList.add("active");
  }

  // Scroll to top when switching tabs
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (id === "admin") document.querySelector(".admin-tab").click();
  if (id === "phrases") {
    renderPhrasesTopics();
    renderPhrases();
  }

  // Close mobile menu if open
  if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    }
  }
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

/* --- MOBILE MENU & FLASHCARD NAV (FIXED) --- */
function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
}

function nextFlashcard() {
  const container = document.getElementById('flashcardsGrid');
  if (!container) return;

  // Calculate card width (85vw + gap)
  const cardWidth = window.innerWidth * 0.85 + 15;

  container.scrollBy({
    left: cardWidth,
    behavior: 'smooth'
  });
}

/* --- FLASHCARD NAVIGATION (PREV) --- */
function prevFlashcard() {
  const container = document.getElementById('flashcardsGrid');
  if (!container) return;

  // Calculate card width (85vw + gap)
  const cardWidth = window.innerWidth * 0.85 + 15;

  container.scrollBy({
    left: -cardWidth,
    behavior: 'smooth'
  });
}

/* --- RANK INFO MODAL --- */
function showRankInfo() {
  const rank = getRank(state.totalPoints);
  const nextRankThreshold = getNextRankThreshold(state.totalPoints);
  const pointsNeeded = nextRankThreshold - state.totalPoints;

  const rankList = ranks[state.lang] || ranks.tr;

  let rankListHTML = rankList.map(r => {
    const isCurrent = state.totalPoints >= r.min && state.totalPoints <= r.max;
    const style = isCurrent ? 'background: #e3f2fd; font-weight: bold;' : '';
    return `<div style="padding: 8px; ${style}">${r.icon} ${r.name} (${r.min}-${r.max === Infinity ? '∞' : r.max} puan)</div>`;
  }).join('');

  const messages = {
    tr: {
      title: '🎖️ Rütbe Sistemi',
      current: 'Mevcut Rütbeniz',
      points: 'Toplam Puanınız',
      next: 'Sonraki Rütbe',
      needed: 'Gereken Puan',
      howToEarn: '💡 Puan Kazanma Yolları',
      word: '• Kelime öğrenme: +1 puan',
      grammar: '• Gramer konusu: +2 puan',
      readingAB: '• Okuma (A1-B1): +3 puan',
      readingB2: '• Okuma (B2+): +5 puan',
      timer: '• 25 dakika tamamlama: +5 puan',
      allRanks: '📊 Tüm Rütbeler'
    },
    en: {
      title: '🎖️ Ranking System',
      current: 'Current Rank',
      points: 'Total Points',
      next: 'Next Rank',
      needed: 'Points Needed',
      howToEarn: '💡 How to Earn Points',
      word: '• Learn a word: +1 point',
      grammar: '• Grammar topic: +2 points',
      readingAB: '• Reading (A1-B1): +3 points',
      readingB2: '• Reading (B2+): +5 points',
      timer: '• Complete 25 minutes: +5 points',
      allRanks: '📊 All Ranks'
    },
    pl: {
      title: '🎖️ System Rang',
      current: 'Obecna Ranga',
      points: 'Łączne Punkty',
      next: 'Następna Ranga',
      needed: 'Potrzebne Punkty',
      howToEarn: '💡 Jak Zdobyć Punkty',
      word: '• Nauka słowa: +1 punkt',
      grammar: '• Temat gramatyki: +2 punkty',
      readingAB: '• Czytanie (A1-B1): +3 punkty',
      readingB2: '• Czytanie (B2+): +5 punktów',
      timer: '• Ukończenie 25 minut: +5 punktów',
      allRanks: '📊 Wszystkie Rangi'
    },
    ua: {
      title: '🎖️ Система Рангів',
      current: 'Поточний Ранг',
      points: 'Загальні Бали',
      next: 'Наступний Ранг',
      needed: 'Потрібно Балів',
      howToEarn: '💡 Як Заробити Бали',
      word: '• Вивчення слова: +1 бал',
      grammar: '• Тема граматики: +2 бали',
      readingAB: '• Читання (A1-B1): +3 бали',
      readingB2: '• Читання (B2+): +5 балів',
      timer: '• Завершення 25 хвилин: +5 балів',
      allRanks: '📊 Всі Ранги'
    }
  };

  const msg = messages[state.lang] || messages.tr;
  const nextRank = rankList.find(r => r.min > state.totalPoints);

  const modalHTML = `
    <div class="modal-overlay" onclick="closeRankInfo()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <h2 style="margin-top:0; color: var(--primary);">${msg.title}</h2>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <div style="margin-bottom: 10px;">
            <strong>${msg.current}:</strong> ${rank.icon} ${rank.name}
          </div>
          <div style="margin-bottom: 10px;">
            <strong>${msg.points}:</strong> ${state.totalPoints}
          </div>
          ${nextRank ? `
            <div style="margin-bottom: 10px;">
              <strong>${msg.next}:</strong> ${nextRank.icon} ${nextRank.name}
            </div>
            <div>
              <strong>${msg.needed}:</strong> ${pointsNeeded}
            </div>
          ` : '<div style="color: #28a745;"><strong>🎉 Maksimum rütbeye ulaştınız!</strong></div>'}
        </div>
        
        <h3 style="color: var(--secondary);">${msg.howToEarn}</h3>
        <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <div style="margin-bottom: 8px;">${msg.word}</div>
          <div style="margin-bottom: 8px;">${msg.grammar}</div>
          <div style="margin-bottom: 8px;">${msg.readingAB}</div>
          <div style="margin-bottom: 8px;">${msg.readingB2}</div>
          <div>${msg.timer}</div>
        </div>
        
        <h3 style="color: var(--secondary);">${msg.allRanks}</h3>
        <div style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; border-radius: 8px;">
          ${rankListHTML}
        </div>
        
        <button onclick="closeRankInfo()" style="margin-top: 20px; padding: 10px 20px; background: var(--primary); color: white; border: none; border-radius: 5px; cursor: pointer; width: 100%;">
          Kapat
        </button>
      </div>
    </div>
  `;

  const modalDiv = document.createElement('div');
  modalDiv.id = 'rankInfoModal';
  modalDiv.innerHTML = modalHTML;
  document.body.appendChild(modalDiv);
}

function closeRankInfo() {
  const modal = document.getElementById('rankInfoModal');
  if (modal) modal.remove();
}

function getNextRankThreshold(currentPoints) {
  const rankList = ranks[state.lang] || ranks.tr;
  const nextRank = rankList.find(r => r.min > currentPoints);
  return nextRank ? nextRank.min : Infinity;
}

/* --- SECTION-SPECIFIC PROGRESS TRACKING --- */
function updateSectionProgress(section, totalItems) {
  let learnedCount = 0;

  if (section === 'vocab') {
    // Count learned words in current filter
    const filtered = db.vocab.filter(
      (w) => w.type === state.filters.type && w.level === state.filters.level
    );
    learnedCount = filtered.filter(w => state.learnedIds.includes(w.id)).length;
  } else if (section === 'grammar') {
    // Count learned grammar topics in current filter
    const filtered = db.grammar.filter((g) => g.level === state.grammarFilter);
    learnedCount = filtered.filter(g => state.learnedGrammar.includes(g.id)).length;
  } else if (section === 'reading') {
    // Count read passages in current level
    const progress = getReadingProgress();
    const currentLevelReads = progress[state.readingFilter] || [];
    learnedCount = currentLevelReads.length;
  }

  const percentage = totalItems > 0 ? Math.min((learnedCount / totalItems) * 100, 100) : 0;

  // Update progress bar
  const progressBar = document.getElementById(`${section}ProgressBar`);
  if (progressBar) {
    progressBar.style.width = percentage + "%";
  }

  // Update count text
  const progressCount = document.getElementById(`${section}ProgressCount`);
  if (progressCount) {
    progressCount.textContent = `${learnedCount} / ${totalItems}`;
  }
}

// Current active question index for Reading section (Exam View)
let currentExamReadingIndex = 0;

function renderReadingSection(filtered, container) {
  if (filtered.length === 0) {
    container.innerHTML = `<div style='text-align:center; padding:20px; color:#999;'>Bu seviye için okuma parçası bulunamadı.</div>`;
    return;
  }

  // Ensure index is valid
  if (currentExamReadingIndex >= filtered.length) currentExamReadingIndex = 0;

  const currentItem = filtered[currentExamReadingIndex];
  const total = filtered.length;


  // --- 1. NAVIGATION (Uniform Design - circles) ---
  let navHTML = `<div class="reading-nav-grid">`;
  filtered.forEach((_, idx) => {
    const activeClass = idx === currentExamReadingIndex ? 'active' : '';
    navHTML += `<button class="reading-nav-btn ${activeClass}" onclick="setExamReadingIndex(${idx})">${idx + 1}</button>`;
  });
  navHTML += `</div>`;

  // --- 2. READING CONTENT (Title + Text) ---
  const contentHTML = `
    <div class="reading-card">
       <div class="reading-header">
          <span class="reading-badge">${currentItem.level}</span>
          <span class="reading-title">${currentItem.title}</span>
       </div>
       <div class="reading-instruction">${currentItem.task || "Lesen Sie den Text."}</div>
       <div class="reading-body">
          ${currentItem.content}
       </div>
    </div>
  `;

  // --- 3. QUESTIONS (Sub-questions) ---
  let questionsHTML = "";

  if (currentItem.sub_questions && Array.isArray(currentItem.sub_questions) && currentItem.sub_questions.length > 0) {
    questionsHTML = `<div class="reading-questions-box">`;
    currentItem.sub_questions.forEach((q, i) => {
      questionsHTML += `
            <div class="reading-question-item">
               <div class="rq-text">${q}</div>
            </div>`;
    });
    questionsHTML += `</div>`;
  }
  // Fallback for legacy format (q & answer)
  else if (currentItem.q) {
    questionsHTML = `<div class="reading-questions-box">
            <div class="reading-question-item"><div class="rq-text">${currentItem.q}</div></div>
          </div>`;
  }

  // --- 4. SHOW ANSWER TOGGLE ---
  const answerHTML = `
    <div class="reading-answer-section">
       <button class="btn-show-reading-answer" onclick="toggleReadingAnswer(this)">
          👁️ Cevapları Göster / Gizle
       </button>
       <div class="reading-answer-content" style="display:none;">
          ${currentItem.answer || "Cevap yok."}
       </div>
    </div>
  `;

  container.innerHTML = navHTML + contentHTML + questionsHTML + answerHTML;
}

function setExamReadingIndex(idx) {
  currentExamReadingIndex = idx;
  // Rerender with new index
  renderExams();
  // Scroll to top of exam content to show new question
  const el = document.getElementById("examContent");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleReadingAnswer(btn) {
  const content = btn.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

/* --- PHRASES LOGIC --- */
function renderPhrasesTopics() {
  const filterRow = document.getElementById("phrasesTopicFilter");
  if (!filterRow) return;

  // Get unique topics
  const topics = [...new Set((window.phrasesData || []).map(p => p.topic))];

  filterRow.innerHTML = "";
  topics.forEach(topic => {
    const btn = document.createElement("button");
    const texts = translations[state.lang];
    const topicLabel = texts.topics?.[topic] || topic;

    btn.className = `glass-btn ${state.phraseTopic === topic ? 'active' : ''}`;
    btn.innerHTML = `🔹 ${topicLabel}`;
    btn.onclick = () => setPhraseTopic(topic, btn);
    filterRow.appendChild(btn);
  });
}

function setPhraseTopic(topic, btn) {
  state.phraseTopic = topic;
  const parent = btn.parentElement;
  parent.querySelectorAll(".glass-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderPhrases();
}

function renderPhrases() {
  const container = document.getElementById("phrasesContainer");
  if (!container) return;
  container.innerHTML = "";

  const texts = translations[state.lang];
  const filtered = (window.phrasesData || []).filter(p => p.topic === state.phraseTopic);

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:20px; color:#999;">${texts.phrasesNotAvailable}</p>`;
    return;
  }

  // Define organic level names based on language
  const levelNames = {
    tr: { GRUNDNIVEAU: "Temel Kalıplar", FORTGESCHRITTEN: "Profesyonel / Sınav Kalıpları" },
    en: { GRUNDNIVEAU: "Basic Phrases", FORTGESCHRITTEN: "Professional / Exam Phrases" },
    de: { GRUNDNIVEAU: "Basis-Redemittel", FORTGESCHRITTEN: "Profi- / Prüfungs-Redemittel" },
    ua: { GRUNDNIVEAU: "Базові фрази", FORTGESCHRITTEN: "Професійні / Екзаменаційні фрази" },
    pl: { GRUNDNIVEAU: "Podstawowe zwroty", FORTGESCHRITTEN: "Zwroty profesjonalne / egzaminacyjne" }
  };

  filtered.forEach(p => {
    const section = document.createElement("div");
    section.className = "phrase-section";
    section.style.gridColumn = "1 / -1";
    section.style.marginBottom = "40px";
    section.style.background = "var(--white)";
    section.style.padding = "30px";
    section.style.borderRadius = "20px";
    section.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";

    const translationDesc = p.description?.[state.lang] || p.description?.tr || p.description || "";
    const organicLevel = levelNames[state.lang]?.[p.level] || p.level;
    const topicLabel = texts.topics?.[p.topic] || p.topic;

    let phrasesHtml = "";
    p.phrases.forEach(item => {
      const trans = item[state.lang] || item.tr || "";
      phrasesHtml += `
        <div class="phrase-item" style="padding:12px; border-bottom:1px solid #f0f0f0; display:flex; justify-content:space-between; align-items:center; gap:15px;">
          <div style="font-weight:600; color:var(--dark); flex:1;">${item.de}</div>
          <div style="color:var(--gray); font-style:italic; flex:1; text-align:right; font-size:0.9rem;">${trans}</div>
        </div>
      `;
    });

    const dialogDe = p.dialog?.de || "";
    const dialogTrans = p.dialog?.[state.lang] || p.dialog?.tr || "";

    const extraText = p.extra?.[state.lang] || p.extra?.tr || p.extra || "";

    section.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">
        <h2 style="color:var(--secondary); font-size:1.8rem; font-weight:800; margin:0;">${topicLabel} <small style="font-size: 1rem; color: var(--gray); font-weight: 400;">(${organicLevel})</small></h2>
      </div>
      <p style="color:#555; line-height:1.6; margin-bottom:25px; font-size:1.1rem; border-left:4px solid var(--primary); padding-left:15px;">${translationDesc}</p>
      
      <div class="phrases-list" style="margin-bottom:30px; display:grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap:0 30px;">
        ${phrasesHtml}
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:20px;">
        <div class="phrase-dialog" style="background:#f9f9f9; padding:20px; border-radius:12px; border:1px dashed #ddd;">
          <h4 style="margin-top:0; color:var(--dark);"><i class="fas fa-comments"></i> DIALOG</h4>
          <div style="white-space:pre-wrap; font-family:monospace; font-size:0.95rem; color:#444; margin-bottom:10px;">${dialogDe}</div>
          <div style="border-top:1px solid #eee; padding-top:10px; font-style:italic; font-size:0.85rem; color:#777;">${dialogTrans}</div>
        </div>
        
        <div class="phrase-extra" style="background:#fff4e5; padding:20px; border-radius:12px; border:1px solid #ffe0b2;">
          <h4 style="margin-top:0; color:#e65100;"><i class="fas fa-star"></i> EXTRA / TIPS</h4>
          <p style="margin:0; font-size:0.95rem; color:#5d4037; line-height:1.5;">${extraText}</p>
        </div>
      </div>
    `;

    container.appendChild(section);
  });
}

