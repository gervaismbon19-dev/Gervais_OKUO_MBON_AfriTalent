  let btn = document.querySelector("#themeToggle");
 
 themeToggle.addEventListener("click",()=>{
            document.querySelector("body").classList.toggle("bg");
            document.querySelector("body").classList.toggle("text");
        });
document.addEventListener('DOMContentLoaded', function() {
    
    // ---------- 1. DARK MODE ----------
    initDarkMode();
    
    // ---------- 2. NAVBAR SCROLL ----------
    initNavbarScroll();
    
    // ---------- 3. BACK TO TOP ----------
    initBackToTop();
    
    // ---------- 4. CURRENT YEAR ----------
    updateCurrentYear();
    
    // ---------- 5. COUNTERS ANIMES ----------
    initCounters();
    
    // ---------- 6. FADE IN SCROLL ----------
    initFadeInOnScroll();
    
    // ---------- 7. FILTRAGE FREELANCES ----------
    initFreelanceFilter();
   
    // ---------- 8. FORMULAIRE CONTACT ----------
    initContactForm();
});

function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('afritalent-theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('afritalent-theme', 'light');
            updateThemeIcon('light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('afritalent-theme', 'dark');
            updateThemeIcon('dark');
        }
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
}

function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', window.scrollY > 300);
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}