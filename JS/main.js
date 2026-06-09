// ==================== MAIN.JS - AFRI TALENT ====================

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

// ==================== DARK MODE ====================
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

// ==================== NAVBAR SCROLL ====================
function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ==================== BACK TO TOP ====================
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

// ==================== CURRENT YEAR ====================
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
}

// ==================== COUNTERS ANIMES ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                }, 30);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.3 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ==================== FADE IN SCROLL ====================
function initFadeInOnScroll() {
    const elements = document.querySelectorAll('.bento-card, .category-card, .freelance-card, .pricing-card, .value-card, .team-card');
    if (!elements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}


// ==================== FORMULAIRE CONTACT ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        const prenom = document.getElementById('prenom');
        const nom = document.getElementById('nom');
        const email = document.getElementById('email');
        const sujet = document.getElementById('sujet');
        const message = document.getElementById('message');
        
        function showError(field, msg) {
            const errorDiv = document.getElementById(`${field.id}Error`);
            if (errorDiv) {
                errorDiv.textContent = msg;
                errorDiv.classList.add('show');
                field.classList.add('error');
            }
            isValid = false;
        }
        
        function clearError(field) {
            const errorDiv = document.getElementById(`${field.id}Error`);
            if (errorDiv) {
                errorDiv.textContent = '';
                errorDiv.classList.remove('show');
                field.classList.remove('error');
            }
        }
        
        if (!prenom.value.trim()) showError(prenom, 'Le prénom est requis');
        else clearError(prenom);
        
        if (!nom.value.trim()) showError(nom, 'Le nom est requis');
        else clearError(nom);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) showError(email, 'L\'email est requis');
        else if (!emailRegex.test(email.value)) showError(email, 'Email invalide');
        else clearError(email);
        
        if (!sujet.value) showError(sujet, 'Veuillez sélectionner un sujet');
        else clearError(sujet);
        
        if (!message.value.trim()) showError(message, 'Le message est requis');
        else if (message.value.length < 20) showError(message, 'Message trop court (minimum 20 caractères)');
        else clearError(message);
        
        if (isValid) {
            const successMsg = document.getElementById('successMessage');
            if (successMsg) {
                successMsg.classList.add('show');
                form.reset();
                setTimeout(() => successMsg.classList.remove('show'), 5000);
            }
        }
    });
}