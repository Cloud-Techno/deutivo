
/* --- MOBILE MENU JS --- */
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
}

/* --- MOBILE FLASHCARD NAV --- */
function nextFlashcard() {
    const container = document.getElementById('flashcardsGrid');
    // Scroll width of one card (approx 85vw + gap)
    // Or just window width since they center snap
    const scrollAmount = window.innerWidth * 0.85;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
