// ===== SCROLL REVEAL ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (nav) {
                nav.classList.remove('active');
            }
        });
    });
});

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== QUERY STRING SERVICE AUTO-SELECT =====
document.addEventListener('DOMContentLoaded', function() {
    // Get service from query string
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (service) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            // Decode the service name (handle URL encoding)
            const decodedService = decodeURIComponent(service);
            serviceSelect.value = decodedService;
        }
    }
});

// ===== FORM SUBMISSION HANDLER =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Build WhatsApp message with proper formatting
        let message = `Hi Brain Yoga & Chetna Jagruti,\n\n`;
        message += `📋 *Contact Details*\n`;
        message += `Name: ${data.name}\n`;
        message += `Phone: ${data.phone}\n`;
        message += `City: ${data.city}\n\n`;
        
        message += `📌 *Service Interested In:* ${data.service}\n\n`;
        
        if (data.date) {
            message += `📅 *Preferred Date:* ${data.date}\n\n`;
        }
        
        if (data.message) {
            message += `💬 *Message:* ${data.message}\n\n`;
        }
        
        message += `---\nSent from Brain Yoga website`;
        
        // WhatsApp URL with primary number
        const whatsappURL = `https://wa.me/919175316756?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp Web
        window.open(whatsappURL, '_blank');
        
        // Reset form
        this.reset();
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observe counter elements
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const target = parseInt(entry.target.dataset.counter);
                animateCounter(entry.target, target);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});
