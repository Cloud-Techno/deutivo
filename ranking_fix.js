
// Fix for missing functions - append to app.js

// Remove old calculateStars function and update functions
function markAsLearned(id, btn) {
    if (!state.learnedIds.includes(id)) {
        state.learnedIds.push(id);
        state.totalPoints += 1; // 1 point per word

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

    // Update rank display
    const rank = getRank(state.totalPoints);
    const starsDisplay = document.getElementById("starsDisplay");
    if (starsDisplay) {
        starsDisplay.textContent = `${rank.icon} ${state.totalPoints} Puan`;
    }

    // Update logo with rank
    updateRankDisplay();
}

function updateRankDisplay() {
    const rank = getRank(state.totalPoints);
    const logoSpan = document.querySelector('.logo span');
    if (logoSpan) {
        logoSpan.textContent = rank.name;
    }
}

function toggleReadForCurrent() {
    const progress = getReadingProgress();
    if (!progress[state.readingFilter]) progress[state.readingFilter] = [];

    const idx = state.readingIndex;
    const btn = document.getElementById("markReadBtn");
    const level = state.readingFilter;

    if (progress[level].includes(idx)) {
        // Remove from read list
        progress[level] = progress[level].filter((i) => i !== idx);
        btn.textContent = "Okudum";

        // Deduct points
        const pointsToDeduct = (level === 'A1' || level === 'A2' || level === 'B1') ? 3 : 5;
        state.totalPoints = Math.max(0, state.totalPoints - pointsToDeduct);
    } else {
        // Mark as read
        progress[level].push(idx);
        btn.textContent = "✔ Okundu";

        // Award points: A1-B1 = 3 points, B2+ = 5 points
        const pointsToAdd = (level === 'A1' || level === 'A2' || level === 'B1') ? 3 : 5;
        state.totalPoints += pointsToAdd;
    }

    saveReadingProgress(progress);
    updateProgressUI();
}
