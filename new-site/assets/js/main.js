/* ========================================
   Brain Yoga & Chetna Jagruti
   Main JavaScript
   ======================================== */

// ====== SCROLL REVEAL ANIMATIONS ======

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .card, .faq-item').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
});

// ====== MOBILE MENU TOGGLE ======

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ====== FAQ ACCORDION ======

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ====== SMOOTH SCROLL FOR ANCHORS ======

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ====== QUERY STRING SERVICE AUTO-SELECT ======

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (service) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            const decodedService = decodeURIComponent(service);
            serviceSelect.value = decodedService;
        }
    }
});

// ====== CONTACT FORM SUBMISSION ======

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            city: formData.get('city'),
            service: formData.get('service'),
            date: formData.get('date'),
            message: formData.get('message')
        };
        
        // Build WhatsApp message
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
        
        // Open WhatsApp
        const whatsappURL = `https://wa.me/919175316756?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form
        this.reset();
    });
}

// ====== COUNTER ANIMATION ======

const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

document.querySelectorAll('[data-counter]').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-counter'));
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counter.classList.contains('animated')) {
                animateCounter(counter, target);
                counter.classList.add('animated');
                observer.unobserve(counter);
            }
        });
    });
    
    observer.observe(counter);
});

console.log('Brain Yoga website loaded successfully ✓');
