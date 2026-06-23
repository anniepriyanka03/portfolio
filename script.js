// ============================================
// NAVIGATION & MOBILE MENU
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL & ACTIVE NAV STATE
// ============================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll simulate a successful submission
    console.log('Form Data:', { name, email, subject, message });

    // Show success message
    showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all glass panels for animation on scroll
document.querySelectorAll('.glass-panel').forEach(element => {
    observer.observe(element);
});

// ============================================
// NAVBAR ACTIVE STATE STYLING
// ============================================

const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--accent-color);
    }

    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navStyle);

// ============================================
// HANDLE LINK CLICKS FOR SMOOTH NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just # or empty
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Scroll to section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// RANDOM STAR BACKGROUND (Optional Animation)
// ============================================

function createStarField() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full viewport size initially
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Position fixed, behind content
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointer = 'none';
    
    document.body.insertBefore(canvas, document.body.firstChild);
    
    // Draw stars with subtle glow
    const stars = [];
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random() * 0.5 + 0.2,
            speed: Math.random() * 0.3
        });
    }
    
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            ctx.fillStyle = `rgba(248, 250, 252, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Add subtle glow
            ctx.strokeStyle = `rgba(56, 189, 248, ${star.opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            
            // Animate star opacity
            star.opacity += star.speed * 0.01;
            if (star.opacity > 0.8 || star.opacity < 0.2) {
                star.speed *= -1;
            }
        });
        
        requestAnimationFrame(drawStars);
    }
    
    drawStars();
}

// Initialize star field on page load
// Uncomment below if you want the star animation
// window.addEventListener('load', createStarField);

// ============================================
// THEME PREFERENCE (Optional Dark/Light Toggle)
// ============================================

function initializeTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

// Initialize theme on load
window.addEventListener('load', initializeTheme);

// ============================================
// PARALLAX SCROLLING EFFECT (Optional)
// ============================================

function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (heroSection && scrollPos < window.innerHeight) {
            heroSection.style.backgroundPosition = `0px ${scrollPos * 0.5}px`;
        }
    });
}

// Initialize parallax on load
window.addEventListener('load', initParallax);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cWelcome to Annie Priyanka\'s Portfolio', 'color: #38bdf8; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Glassmorphism UI and ❤️', 'color: #34d399; font-size: 14px;');
console.log('%cFeel free to connect: anniepriyanka03@gmail.com', 'color: #cbd5e1; font-size: 12px;');

// ============================================
// PAGE LOAD COMPLETE
// ============================================

window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    // Add any final initialization here
});
